import React, { useEffect, useReducer } from "react";
import { Context } from "./context/Context";
import AppRoutes from "./routes/AppRoutes";
import { battleGameReducer } from "./services/reducers/battleGameReducer";
import { types } from "./services/types/types";

import useGetPokemons from "./services/hooks/useGetPokemons";
import useGetMoves from "./services/helpers/useGetMoves";
import "./assets/styles/styles.css";

import { authInitState, authReducer } from "./services/auth/authReducer";
import { AuthContext } from "./services/auth/AuthContext";

function App() {
  const [pokemon_data, pokemon_loading, pokemon_error] = useGetPokemons(
    "https://pokeapi.co/api/v2",
    80
  );

  const INITIAL_STATE = {
    pokemons: [],
    selected_pokemon: [],
    isReady: false,
    isLoading: false,
    isWinner: false,
    isLooser: false,
    next_action: "select-move",
    screen_text: "What will you do?",
  };

  /* ------ */
  const [authState, authDispatch] = useReducer(authReducer, {}, authInitState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      localStorage.setItem("auth", JSON.stringify(authState));
    } else {
      localStorage.removeItem("auth");
    }
  }, [authState.isAuthenticated]);

  const [state, dispatch] = useReducer(battleGameReducer, INITIAL_STATE);

  useEffect(() => {
    !pokemon_loading &&
      dispatch({
        type: types.INITIALIZE_STATE,
        pokemon_data,
      });
  }, [pokemon_loading]);

  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <Context.Provider
          value={{
            state,
            dispatch,
            pokemon_data,
            pokemon_loading,
            pokemon_error,
          }}
        >
          <AppRoutes />
        </Context.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
