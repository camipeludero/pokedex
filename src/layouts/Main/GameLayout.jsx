import React from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const GameLayout = ({ children }) => {
  return (
    <>
      <Link to={"/"}>
        <Fab
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
          color="primary"
          aria-label="add"
        >
          <MenuIcon />
        </Fab>
      </Link>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100vw",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default GameLayout;
