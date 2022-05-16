import React from "react";
import style from "./Button.module.css";

const Button = ({ onClickFunction, text, variant }) => {
  let variantClass = style.button_secondary;
  return (
    <button className={variantClass} onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;
