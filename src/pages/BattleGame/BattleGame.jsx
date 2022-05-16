import React, { useContext } from "react";
import GameLayout from "../../layouts/Main/GameLayout";
import { Context } from "../../context/Context";
import Battle from "./views/Battle";
import Selection from "./views/Selection";

const BattleGame = () => {
  const { state } = useContext(Context);

  return <GameLayout>{state.isReady ? <Battle /> : <Selection />}</GameLayout>;
};

export default BattleGame;
