import React from "react";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import "../styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Pokemon from "../pages/Pokemon";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Battle from "../pages/Battle";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/pokemon/:pokemonId"} element={<Pokemon />} />
          <Route exact path={"/pokedex"} element={<Pokedex />} />
          <Route exact path={"/profile"} element={<Profile />} />
          <Route exact path={"/battle"} element={<Battle />} />
        </Routes>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
