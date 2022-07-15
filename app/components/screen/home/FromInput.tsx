import React from "react";
import { Coords } from "google-map-react";
import InputPlaces from "../../ui/InputPlaces";
import { useActions } from "../../../hooks/useActions";

const FromInput = () => {
  const { setFrom, setTo } = useActions();

  const cbSuccess = (adress: string, location: Coords) => {
    setFrom({ location, description: adress });
    setTo("");
  };
  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};

export default FromInput;
