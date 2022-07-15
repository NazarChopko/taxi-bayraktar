import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import { optionList } from "./data";
const defaultOptions = {
  clickableIcons: true,
  disableDoubleClickZoom: false,
  zoomControl: true,
  fullscreenControl: false,
  panControl: true,
  scaleControl: true,
  rotateControl: false,
  scrollwheel: false,
  streetViewControl: false,
  mapTypeControl: false,
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapGoogle = () => {
  const [directionResponse, setDirectionResponse] = useState(null);
  const mapRef = useRef(null);
  const { from, to, travelTime } = useTypedSelector(
    (state) => state.taxiReducer
  );
  const { setTravelTime, setOptions, setTravelDistance } = useActions();

  useEffect(() => {
    if (from.location && to.location) {
      calculateDirection();
    }
  }, [from.location && to.location]);

  console.log(+String(travelTime).slice(0, 3) * 2);

  const clearDirection = () => {
    setTravelTime(0);
    setOptions("");
  };

  const calculateDirection = async () => {
    if (!from.location || !to.location) return;
    const directionService = new google.maps.DirectionsService();

    const result = await directionService.route({
      origin: from.location,
      destination: to.location,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    const distance = result.routes[0].legs[0].distance.value;
    const time = result.routes[0].legs[0].duration.value;
    setTravelDistance(+String(distance).slice(0, 3));
    setTravelTime(Math.ceil(time / 60));
    setOptions(optionList[0]._id);
    setDirectionResponse(result);
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  return (
    <div style={{ width: "480px", height: "100vh" }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={
          from?.location?.lat
            ? {
                lat: from.location.lat,
                lng: from.location.lng,
              }
            : undefined
        }
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {directionResponse && (
          <>
            <DirectionsRenderer directions={directionResponse} />
          </>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapGoogle;
