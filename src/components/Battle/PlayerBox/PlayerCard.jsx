import React from "react";
import HpBar from "./HpBar";
import styles from "./PlayerBox.module.css";

const PlayerCard = ({ player, type }) => {
  
  return (
    <div className={type === 'user' ? styles.playerBoxCard_user : styles.playerBoxCard_opponent}>
      <h3>{player.name}</h3>
      <HpBar player={player} />
    </div>
  );
};

export default PlayerCard;
