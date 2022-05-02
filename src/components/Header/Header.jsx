import React, { useContext } from "react";
import { Context } from "../Context";
import IconPokeball from "../IconPokeball";
import Logo from "./Logo";
import "./header.css";

const Header = () => {
  const { user, setUser } = useContext(Context);
  return (
    <>
      <div className="header">
        <p>≡</p>
        <Logo />
        <p>
          <IconPokeball height={"1rem"} width={"1rem"} color={"#666666"} />
          {user.pokecoins}
        </p>
      </div>
    </>
  );
};

export default Header;
