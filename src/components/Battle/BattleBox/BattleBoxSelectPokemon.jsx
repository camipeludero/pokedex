import React from "react";
import { Button } from "@mui/material";

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
        <Button
          variant={"contained"}
          onClick={() => (
            switchPlayer(player, pokemon, userTeam, "user"),
            setNextAction("select-pokemon-move", "Which attack will you use?")
          )}
        >
          {pokemon.name}
        </Button>
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemon;
