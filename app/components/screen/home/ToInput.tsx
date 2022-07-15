import React from "react";
import { Coords } from "google-map-react";
import InputPlaces from "../../ui/InputPlaces";
import { useActions } from "../../../hooks/useActions";

const ToInput = () => {
  const { setTo } = useActions();

  const cbSuccess = (adress: string, location: Coords) => {
    setTo({ location, description: adress });
  };
  return <InputPlaces cbSuccess={cbSuccess} type="to" />;
};

export default ToInput;
