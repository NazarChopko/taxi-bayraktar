import React, { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: string;
  bgColor: string;
  cb: () => void;
  isDisablde: boolean;
}

const Button: FC<IButton> = (props) => {
  const { title, color, bgColor, isDisablde, cb, ...left } = props;
  return (
    <button
      {...left}
      className={cn(
        "rounded-2xl block  w-2/3 p-3 text-lg font-medium mx-auto shadow-md transition-colors duration-300 ease-in-out",
        { "cursor-not-allowed": isDisablde }
      )}
      style={{ backgroundColor: isDisablde ? "rgb(229,231,235)" : bgColor }}
      disabled={isDisablde}
      onClick={cb}
    >
      {title}
    </button>
  );
};

export default Button;
