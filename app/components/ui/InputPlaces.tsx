import React, { useState, FC, useRef, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import cn from "classnames";

import { FiSearch } from "react-icons/fi";
import { Coords } from "google-map-react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IInputPlacesProps {
  cbSuccess: (adress: string, location: Coords) => void;
  type: "from" | "to";
}

const InputPlaces: FC<IInputPlacesProps> = ({ type, cbSuccess }) => {
  const [adress, setAdress] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { travelTime } = useTypedSelector((state) => state.taxiReducer);

  useEffect(() => {
    if (isFrom) {
      setFocus();
    }
  }, [type]);

  const handleSelect = (adress: string) => {
    geocodeByAddress(adress)
      .then((res) => getLatLng(res[0]))
      .then((location) => {
        cbSuccess(adress, location);
        setAdress(adress);
      })
      .catch((e) => console.log(e));
  };

  const setFocus = () => {
    inputRef?.current?.focus();
  };

  const isFrom = type === "from";

  return (
    <PlacesAutocomplete
      value={adress}
      onChange={setAdress}
      onSelect={handleSelect}
      onError={(err) => console.log(err)}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div
          className={cn("shadow-lg", {
            "mb-5": isFrom,
          })}
        >
          <div
            className="px-5 py-4 bg-white rounded-lg flex items-center"
            style={
              suggestions.length
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }
                : {}
            }
          >
            <FiSearch
              color={isFrom ? "#ffbc00" : "#615F5D"}
              className="mr-3"
              size={26}
            />
            <input
              {...getInputProps({
                className: "text-gray-800 w-full outline-none pr-[90px]",
                placeholder: isFrom ? "Where from" : "Where to",
                ref: inputRef,
              })}
            />
            {!isFrom && (
              <div className="absolute right-2 text-sm text-gray-400">
                {travelTime
                  ? `${travelTime} min. (${Math.round(travelTime / 60)} h.)`
                  : "- min."}
              </div>
            )}
          </div>
          <div
            className={cn(
              "overflow-y-auto rounded-b-lg z-10 absolute w-full h-0 ",
              {
                "h-48": suggestions.length || loading,
              }
            )}
          >
            {loading && <div className="p-2 bg-white"> Loading...</div>}
            {suggestions.map((el, i) => (
              <div
                {...getSuggestionItemProps(el, {
                  className: cn("cursor-pointer p-3 bg-white"),
                })}
              >
                <span className="bg-red">{el.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default InputPlaces;
