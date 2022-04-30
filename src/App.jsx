import React, { useState, useEffect } from "react";
import Home from "./Layout/Home";
import Store from "./Layout/Store";
import "./styles/styles.css";

import testUser from "./utils/testUser";

import { Context } from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Layout/Profile";
import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";

import useGetData from "./helpers/useGetData";

function App() {
  const [user, setUser] = useState({});
  const url = "https://pokeapi.co/api/v2";
  let limit = 50;
  const [pokemons, loading, error] = useGetData(url, limit);

  useEffect(() => {
    setUser(testUser);
  }, []);

  return (
    <>
      {
        <BrowserRouter>
          <Context.Provider value={{ user, setUser, pokemons }}>
            <Header />
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path={"/store"} element={<Store />} />
              <Route exact path={"/profile"} element={<Profile />} />
              <Route path={"*"} element={<p>404. Not found</p>} />
            </Routes>
          </Context.Provider>
          <Navbar />
        </BrowserRouter>
      }
    </>
  );
}

export default App;
