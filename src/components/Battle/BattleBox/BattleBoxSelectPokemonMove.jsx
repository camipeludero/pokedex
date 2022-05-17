import React from "react";
import { Button } from "@mui/material";

const BattleBoxSelectPokemonMove = ({ player, attackMove, opponent }) => {
  return (
    <div>
      {player.moves.map((move) => (
        <Button
          variant={"contained"}
          onClick={() => attackMove(move, player, opponent)}
        >
          {move.name}
        </Button>
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemonMove;
