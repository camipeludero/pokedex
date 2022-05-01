import React, { useState, useEffect, useContext } from "react";
import { Context } from "../components/Context";
import PokeList from "../components/MyPokemons";

const Home = () => {
  const { user, setUser } = useContext(Context);
  const { pokemons } = useContext(Context);

  return (
    <>
      <h5>Hola {user.name}</h5>
      <PokeList />
    </>
  );
};

export default Home;
