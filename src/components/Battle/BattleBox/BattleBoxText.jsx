import React from "react";
import styles from "./BattleBox.module.css";

const BattleBoxText = ({ text }) => {
  return (
    <div>
      <p className={styles.BattleBoxText}>{text}</p>
    </div>
  );
};

export default BattleBoxText;
