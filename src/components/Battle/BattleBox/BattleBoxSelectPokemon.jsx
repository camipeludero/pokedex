import React from "react";
import Button from "../../Button/Button";

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
          variant={"pokemon"}
          text={pokemon.name}
          onClickFunction={() => (
            switchPlayer(player, pokemon, userTeam, "user"),
            setNextAction("select-pokemon-move", "Which attack will you use?")
          )}
        />
      ))}
    </div>
  );
};

export default BattleBoxSelectPokemon;
