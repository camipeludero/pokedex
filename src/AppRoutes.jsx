import React from "react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import PokeDetails from "./pages/Pokemon/PokeDetails.jsx";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/pokemon/:pokemonId"} element={<PokeDetails />} />
          <Route exact path={"/store"} element={<Store />} />
          <Route exact path={"/profile"} element={<Profile />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
