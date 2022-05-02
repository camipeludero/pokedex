import React from "react";
import { Link } from "react-router-dom";
import IconPokeball from "../IconPokeball";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="logo">
          <IconPokeball height={"2rem"} width={"2rem"} color={"#000000"} />
          <h1>Pokegame</h1>
        </div>
      </Link>
    </>
  );
};

export default Logo;
