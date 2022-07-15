import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Button from "../../ui/Button";
import { optionList } from "./data";

const OrderButton: FC = () => {
  const { travelTime, selectedOptions } = useTypedSelector(
    (state) => state.taxiReducer
  );
  const orderHandler = () => {
    console.log(
      alert(
        `Thanks for order. You ordered ${
          optionList.find((option) => option._id === selectedOptions)?.title
        }! `
      )
    );
  };
  return (
    <Button
      title="Order"
      bgColor="#ffe847"
      color="#111"
      cb={orderHandler}
      isDisablde={!travelTime && !selectedOptions}
    />
  );
};

export default OrderButton;
