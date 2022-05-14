import React from "react";

const BattleBoxSelectPokemonMove = ({ player, attackMove, opponent }) => {
  return (
    <div>
      {player.moves.map((move) => (
        <button onClick={() => attackMove(move, player, opponent)}>
          {move.name}
        </button>
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemonMove;
