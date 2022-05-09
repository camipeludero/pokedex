import React from "react";
import { Context } from "./context/Context";
import AppRoutes from "./routes/AppRoutes";
import useGetPokemons from "./helpers/useGetPokemons";
import "./styles/styles.css";

function App() {
  const url = "https://pokeapi.co/api/v2";
  let limit = 50;
  const [pokeList, loading, error] = useGetPokemons(url, limit);

  return (
    <>
      <Context.Provider value={{ pokeList, loading, error }}>
        <AppRoutes />
      </Context.Provider>
    </>
  );
}

export default App;
