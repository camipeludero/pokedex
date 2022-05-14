import React from "react";

const BattleBoxSelectPokemon = ({
  backUpPlayers,
  switchPlayer,
  setNextAction,
  player,
  userTeam,
}) => {
  return (
    <div>
      {backUpPlayers.map((pokemon) => (
        <button
          onClick={() => (
            switchPlayer(player, pokemon, userTeam, "user"),
            setNextAction("select-pokemon-move", "Which attack will you use?")
          )}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemon;
