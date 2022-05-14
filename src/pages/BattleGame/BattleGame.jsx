import React, { useContext } from "react";
import Layout from "../../layouts/Main/Layout";
import { Context } from "../../context/Context";
import Battle from "./views/Battle";
import Selection from "./views/Selection";

const BattleGame = () => {
  const { state } = useContext(Context);

  return <Layout>{state.isReady ? <Battle /> : <Selection />}</Layout>;
};

export default BattleGame;
