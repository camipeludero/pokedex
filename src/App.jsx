import React, { useEffect, useReducer } from "react";
import { Context } from "./context/Context";
import AppRoutes from "./routes/AppRoutes";
import { battleGameReducer } from "./services/reducers/battleGameReducer";
import { types } from "./services/types/types";

import useGetPokemons from "./services/helpers/useGetPokemons";
import useGetMoves from "./services/helpers/useGetMoves";
import "./assets/styles/styles.css";

function App() {
  const [pokemon_data, pokemon_loading, pokemon_error] = useGetPokemons(
    "https://pokeapi.co/api/v2",
    80
  );

  const [moves, loadingMoves, errorMoves] = useGetMoves(
    "https://pokeapi.co/api/v2",
    100
  );

  const getMovesByPokemon = (pokemon_data, moves) => {
    pokemon_data.forEach((pokemon) => {
      pokemon.moves = [];
      moves.forEach((move) => {
        move.learned_by_pokemon.forEach((item) => {
          if (item.name == pokemon.name) {
            pokemon.moves.push(move);
          }
        });
      });
    });
  };

  getMovesByPokemon(pokemon_data, moves);

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

  const [state, dispatch] = useReducer(battleGameReducer, INITIAL_STATE);

  useEffect(() => {
    !pokemon_loading &&
      dispatch({
        type: types.INITIALIZE_STATE,
        pokemon_data,
      });
  }, [pokemon_loading]);

  console.log(pokemon_data);

  return (
    <>
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
    </>
  );
}

export default App;
