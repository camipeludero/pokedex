import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Profile/views/Login";
import SignUp from "../pages/Profile/views/SignUp";
import BattleGame from "../pages/BattleGame/BattleGame";
import Pokemon from "../pages/Pokemon/Pokemon";
import Header from "../layouts/Header/Header";
import Navbar from "../layouts/Header/Navbar";
import Footer from "../layouts/Footer/Footer";
import "../assets/styles/styles.css";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/battle"} element={<BattleGame />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/pokemon/:pokemonId"} element={<Pokemon />} />
          <Route exact path={"/pokedex"} element={<Pokedex />} />
          <Route exact path={"/profile"} element={<Profile />} />
        </Routes>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
