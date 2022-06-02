import React from "react";
import style from "./Button.module.css";

const Button = ({ children, onClick, variant, width }) => {
  let styleClass =
    variant === "yellow" ? style.yellow_button : style.black_button;
  return (
    <button
      className={`${style.button} ${styleClass} extra_bold_17 ${
        width === "block" && style.block
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
