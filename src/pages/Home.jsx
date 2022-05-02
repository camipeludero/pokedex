import React, { useState, useEffect, useContext } from "react";
import { Context } from "../components/Context";
import MyPokemons from "../components/MyPokemons";

const Home = () => {
  const { user, setUser } = useContext(Context);
  const { pokeList } = useContext(Context);

  return (
    <>
      <h5>Hola {user.name}</h5>
      <MyPokemons />
    </>
  );
};

export default Home;
