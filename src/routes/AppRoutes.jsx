import React, { useContext } from "react";
import { AuthContext } from "../services/auth/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Profile/views/Login";
import SignUp from "../pages/Profile/views/SignUp";
import BattleGame from "../pages/BattleGame/BattleGame";
import Pokemon from "../pages/Pokemon/Pokemon";
import "../assets/styles/styles.css";

function AppRoutes() {
  const { authState } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <RedirectRoute
                condition={authState.isAuthenticated}
                redirectRoute={"/login"}
              >
                <Profile />
              </RedirectRoute>
            }
          />

          <Route
            path="/login"
            element={
              <RedirectRoute
                condition={!authState.isAuthenticated}
                redirectRoute={"/profile"}
              >
                <Login />
              </RedirectRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <RedirectRoute
                condition={!authState.isAuthenticated}
                redirectRoute={"/profile"}
              >
                <SignUp />
              </RedirectRoute>
            }
          />

          {/* Default Routes */}

          <Route path={"/"} element={<Home />} />
          <Route path={"/pokemon/:pokemonId"} element={<Pokemon />} />
          <Route path={"/pokedex"} element={<Pokedex />} />
          <Route path={"/battle"} element={<BattleGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
