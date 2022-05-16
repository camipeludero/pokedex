import React from "react";
import Button from "../../Button/Button";

const BattleBoxSelectPokemonMove = ({ player, attackMove, opponent }) => {
  return (
    <div>
      {player.moves.map((move) => (
        <Button
          variant={"move"}
          text={move.name}
          onClickFunction={() => attackMove(move, player, opponent)}
        />
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemonMove;
