import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import "./styles/styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import testUser from "./utils/testUser";

import { Context } from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PokeDetails from "./components/PokeDetails";

import useGetPokemons from "./helpers/useGetPokemons";

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
      <CssBaseline />

      <BrowserRouter>
        <Context.Provider value={{ user, setUser, pokeList }}>
          <Header />
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route
              exact
              path={"/pokemon/:pokemonId"}
              element={<PokeDetails />}
            />
            <Route exact path={"/store"} element={<Store />} />
            <Route exact path={"/profile"} element={<Profile />} />
            <Route path={"*"} element={<p>404. Not found</p>} />
          </Routes>
        </Context.Provider>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
