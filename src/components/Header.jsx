import React, { useContext } from "react";
import { Context } from "./Context";

const Header = () => {
  const { user, setUser } = useContext(Context);
  return (
    <>
      <div className="header">
        <p>≡</p>
        <h1>pokeami</h1>
        <p>$$ {user.pokecoins}</p>
      </div>
    </>
  );
};

export default Header;
