import React from "react";
import style from "./Button.module.css";

const YellowButton = ({ children, onClick, variant }) => {
  return (
    <button
      className={`${style.yellow_button} extra_bold_21 ${
        variant === "block" && style.block
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default YellowButton;
