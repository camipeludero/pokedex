import React from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";

const GameLayout = ({ children }) => {
  return (
    <>
      <Navbar />
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
