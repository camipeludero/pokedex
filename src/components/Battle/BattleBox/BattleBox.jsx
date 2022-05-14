import React from "react";
import BattleBoxText from "./BattleBoxText";

import BattleBoxSelectMove from "./BattleBoxSelectMove";
import BattleBoxSelectPokemon from "./BattleBoxSelectPokemon";
import BattleBoxSelectPokemonMove from "./BattleBoxSelectPokemonMove";

const BattleBox = ({
  state,
  setNextAction,
  backUpPlayers,
  switchPlayer,
  player,
  userTeam,
  attackMove,
  opponent,
}) => {
  return (
    <div>
      {/* El texto que se muestra en pantalla cambia segun la siguiente accion a realizar */}
      <BattleBoxText text={state.screen_text} />

      {state.next_action == "select-move" && (
        <BattleBoxSelectMove
          backUpPlayers={backUpPlayers}
          setNextAction={setNextAction}
        />
      )}

      {state.next_action == "select-pokemon" && (
        <BattleBoxSelectPokemon
          backUpPlayers={backUpPlayers}
          switchPlayer={switchPlayer}
          setNextAction={setNextAction}
          player={player}
          userTeam={userTeam}
        />
      )}

      {state.next_action == "select-pokemon-move" && (
        <BattleBoxSelectPokemonMove
          player={player}
          attackMove={attackMove}
          opponent={opponent}
        />
      )}
    </div>
  );
};

export default BattleBox;
