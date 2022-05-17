import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Battle from "./views/Battle";
import Selection from "./views/Selection";

const BattleGame = () => {
  const { state } = useContext(Context);

  return state.isReady ? <Battle /> : <Selection />;
};

export default BattleGame;
