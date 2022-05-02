import React, { useState, useEffect } from "react";
import { Context } from "./components/Context";
import AppRoutes from "./AppRoutes";
import testUser from "./utils/testUser";
import useGetPokemons from "./helpers/useGetPokemons";
import "./styles/styles.css";

function App() {
  const [user, setUser] = useState({});
  const url = "https://pokeapi.co/api/v2";
  let limit = 50;
  const [pokeList, loading, error] = useGetPokemons(url, limit);

  useEffect(() => {
    setUser(testUser);
  }, []);

  return (
    <>
      <Context.Provider value={{ user, setUser, pokeList }}>
        <AppRoutes />
      </Context.Provider>
    </>
  );
}

export default App;
