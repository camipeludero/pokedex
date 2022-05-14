import React from "react";
import style from "./Button.module.css";

const Button = ({ onClickFunction, text }) => {
  return (
    <button className={`${style.button}`} onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;
