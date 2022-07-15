import React from "react";
import Image from "next/image";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { optionList } from "./data";
import cn from "classnames";

const Options = () => {
  const { selectedOptions, travelTime, travelDistance } = useTypedSelector(
    (state) => state.taxiReducer
  );
  const { setOptions } = useActions();
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar my-5">
      <div className="flex flex-nowrap ">
        {optionList.map((option) => (
          <button
            className="inline-block rounded-xl py-2 px-4 outline-none mr-4 bg-white overflow-hidden min-w-[105px]"
            key={option._id}
            onClick={() => travelTime && setOptions(option._id)}
          >
            <div
              className={cn(
                "opacity-30 text-left transition-opacity duration-300 ease-in-out",
                {
                  "opacity-100": option._id === selectedOptions,
                }
              )}
            >
              <Image
                src={option.img}
                alt={option.title}
                width={50}
                height={50}
              />
              <div className="-mt-2 text-sm" style={{ color: "#222" }}>
                {option.title}
              </div>
              <div className="text-base font-medium">
                {travelDistance
                  ? `₴${(travelDistance * option.multiplier).toFixed(0)}`
                  : "₴"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
