import React from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import style from "./Form.module.css";

const TextField = ({ name, type, placeholder, onChange }) => {
  return (
    <div className={style.TextField}>
      {name === "name" ? (
        <PersonOutlineIcon />
      ) : name === "email" ? (
        <EmailOutlinedIcon />
      ) : (
        <LockOutlinedIcon />
      )}
      <input
        className={`${style.Input} medium_21 color_black`}
        type={type}
        name={name}
        required
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
