import React from "react";
import { Button as MUIButton } from "@mui/material";

const Button = ({ text, onClick, dataId }) => {
  return (
    <MUIButton variant="contained" data-id={dataId} onClick={onClick}>
      {text}
    </MUIButton>
  );
};

export default Button;
