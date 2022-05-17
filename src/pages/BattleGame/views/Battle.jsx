import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { types } from "../../../services/types/types";
import PlayerBox from "../../../components/Battle/PlayerBox/PlayerBox";
import BattleBox from "../../../components/Battle/BattleBox/BattleBox";
import {
  getMoveDamage,
  swap,
  pickARandomMove,
} from "../../../services/helpers/functions";
import GameLayout from "../../../layouts/Main/GameLayout";

export const styles = {
  battle: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    margin: "0 auto",
    background:
      "linear-gradient(180deg, #39E5E1 0%, #9CF6E8 21.78%, #5CD563 25.5%, #67D667 100%)",
  },
};

const Battle = () => {
  const { state, dispatch } = useContext(Context);

  const player = state.gameInfo.user.player;
  const opponent = state.gameInfo.opponent.player;

  let userTeam = state.gameInfo.user.team;
  let opponentTeam = state.gameInfo.opponent.team;

  let backUpOpponents = opponentTeam.filter(
    (pokemon) => pokemon.id !== opponent.id && !pokemon.has_fainted
  );

  let backUpPlayers = userTeam.filter(
    (pokemon) => pokemon.id !== player.id && !pokemon.has_fainted
  );

  //action reducer -> recibe un pokemon y lo define como el player actual
  const setPokemon = (player_type, next) => {
    dispatch({
      type: types.SET_POKEMON,
      player_type,
      next,
    });
  };

  //accion reducer -> recibe la accion siguiente para cambiar el texto del UI
  const setNextAction = (next_action, screen_text) => {
    dispatch({
      type: types.SET_NEXT_ACTION,
      next_action,
      screen_text,
    });
  };

  //action reducer -> recibe el nuevo valor de hp y actualiza el estado del jugador (de acuerdo al usuario/opponentTeam)
  const setPlayerHP = (newHp, player_type) => {
    dispatch({
      type: types.SET_PLAYER_HP,
      newHp,
      player_type: player_type,
    });
  };

  //recibe un pokemon seleccionado del backUp y lo establece como el player actual
  const switchPlayer = (current, next, team, player_type) => {
    swap(current, next, team);
    setPokemon(player_type, next);
  };

  //recibe un usuario/oponente y actualiza el estado (hp= 0, has_fainted=true) del jugador principal
  const faintPlayer = (player, player_type) => {
    let newHp = 0;
    dispatch({ type: types.SET_PLAYER_HP, newHp, player_type: player_type });
    dispatch({
      type: types.FAINT_PLAYER,
      player_type: player_type,
    });
    setTimeout(() => {
      setNextAction("player_fainted", `${player.name} has fainted!`);
    }, 2500);
  };

  const defenseMove = (player, opponent) => {
    let move = pickARandomMove(opponent.moves);
    let { damage } = getMoveDamage(move, player);
    let newHp = player.hp - damage;

    setTimeout(() => {
      setNextAction(
        "defense-move",
        `${opponent.name} used ${move.name} against ${player.name}. It caused ${damage} of damage`
      );
    }, 1500);

    if (newHp > 1) {
      //sigue jugando -> disminuye hp y pasa el turno al usuario
      setTimeout(() => {
        setPlayerHP(newHp, "user");

        setNextAction("select-move", "What will you do?");
      }, 2500);
    } else {
      if (backUpPlayers.length > 0) {
        //el usuario debe cambiar pokemons para seguir jugando

        faintPlayer(player, "user");

        setTimeout(() => {
          setNextAction("select-pokemon", "Which Pokemon will you use?");
        }, 6000);
      } else {
        //el usuario ya no tiene mas pokemons para cambiar -> GAME OVER
        faintPlayer(player, "user");
        //TODO: CAMBIAR DINAMICA AL PERDER LA PARTIDA
        setTimeout(() => {
          dispatch({
            type: types.GAME_OVER,
          });
        }, 4500);

        alert("GAME OVER"); //previsorio
      }
    }
  };

  //recibe el movimiento seleccionado, el player actual y el oponente actual
  const attackMove = (move, player, opponent) => {
    let { damage } = getMoveDamage(move, opponent);

    setNextAction(
      "attack-move",
      `${player.name} used ${move.name} against ${opponent.name}. It caused ${damage} of damage`
    );

    let newHp = opponent.hp - damage;

    if (newHp > 1) {
      setPlayerHP(newHp, "opponent");
      defenseMove(player, opponent);
    } else {
      if (backUpOpponents.length > 0) {
        //el oponente debe cambiar automaticamente al siguiente pokemon
        faintPlayer(opponent, "opponent");

        let nextOpponent = backUpOpponents.find(
          (pokemon) => !pokemon.has_fainted
        );

        switchPlayer(opponent, nextOpponent, opponentTeam, "opponent");

        setTimeout(() => {
          setNextAction(
            "switching-opponent",
            `Your opponent has changed pokemon!`
          );
        }, 3000);

        //agrego un retraso para leer bien los textos cuando el pokemon oponente es eliminado
        setTimeout(() => {
          setNextAction("select-move", "What will you do?");
        }, 4500);
      } else {
        //el oponente ya no tiene mas pokemons para cambiar -> WIN
        faintPlayer(opponent, "opponent");
        //TODO: CAMBIAR DINAMICA AL GANAR LA PARTIDA
        setTimeout(() => {
          dispatch({
            type: types.WIN,
          });
          alert("YOU WIN!"); //previsorio
        }, 4500);
      }
    }
  };

  /* To-do:

  [] cambiar el texto de los movimientos - agregar animaciones
  [] FIGHT / SWITCH -> agregar boton de volver atras
  [] play again button
  [] reiniciar el juego al salir de la pagina */

  /* componentDidMount() {
      
      } */

  /* componentWillUnmount() {
        dispatch({
          type: types.READY_TO_BATTLE, 
        });
      }
    */
  return (
    <>
      <GameLayout>
        <div style={styles.battle}>
          {state.isReady && (
            <>
              {/* <BackUpPlayerContainer
              opponentTeam={opponentTeam}
              userTeam={userTeam}
            /> */}

              <PlayerBox type={"opponent"} player={opponent} />
              <PlayerBox type={"user"} player={player} />

              <BattleBox
                state={state}
                setNextAction={setNextAction}
                backUpPlayers={backUpPlayers}
                switchPlayer={switchPlayer}
                player={player}
                userTeam={userTeam}
                attackMove={attackMove}
                opponent={opponent}
              />
            </>
          )}
        </div>
      </GameLayout>
    </>
  );
};

export default Battle;
