import React, { useState, useContext } from "react";
import { Context } from "../../../context/Context";
import PokemonList from "../../../components/Battle/PokemonList";
import { types } from "../../../services/types/types";
import { shuffleArray } from "../../../services/helpers/functions";

const Selection = () => {
  const { state, dispatch, pokemon_data } = useContext(Context);

  const setLoading = () => {
    dispatch({
      type: types.LOADING,
    });
  };

  const setTeam = (team) => {
    team = team.map((pokemon) => {
      let hp = 500;
      let hpMax = 500;
      let has_fainted = false;
      let shuffled_moves = shuffleArray(pokemon.moves);
      let moves = shuffled_moves.slice(0, 4);

      return {
        ...pokemon,
        moves: moves,
        hp: hp,
        hpMax: hpMax,
        has_fainted: has_fainted,
        is_selected: false,
      };
    });

    return team;
  };

  const confirmTeam = (selected_pokemon) => {
    let userTeam = setTeam(selected_pokemon);

    let selected_opponents = shuffleArray(pokemon_data).slice(0, 3);
    let opponentTeam = setTeam(selected_opponents);

    setLoading();

    return {
      user: {
        team: userTeam,
        player: userTeam[0], //esto deberia hacerse con setPokemon
      },
      opponent: {
        team: opponentTeam,
        player: opponentTeam[0], //esto deberia hacerse con setPokemon
      },
    };
  };

  const onReady = (gameInfo) => {
    setTimeout(() => {
      dispatch({
        type: types.LOADING, //simulamos una espera para encontrar oponente
      });
      dispatch({
        type: types.READY_TO_BATTLE, //cambiamos el estado para pasar a la view de Battle
        gameInfo,
      });
    }, 2000);
  };

  return (
    <>
      <div>
        <h2>Select your team</h2>
        {/*todo: add search input */}
        <div>
          {state.selected_pokemon.length == 3 &&
            (state.isLoading ? (
              <p>Waiting for opponent...</p>
            ) : (
              <input
                type="button"
                value="Confirm team"
                onClick={() => {
                  onReady(confirmTeam(state.selected_pokemon));
                }}
              />
            ))}
        </div>
        <PokemonList />
      </div>
    </>
  );
};

export default Selection;
