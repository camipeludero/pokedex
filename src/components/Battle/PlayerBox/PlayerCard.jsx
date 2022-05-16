import React from "react";
import HpBar from "./HpBar";
import styles from "./PlayerBox.module.css";

const PlayerCard = ({ player, type }) => {
  return (
    <div
      className={
        type === "user"
          ? styles.playerBoxCard_user
          : styles.playerBoxCard_opponent
      }
    >
      <h3 className={styles.playerName}>{player.name}</h3>
      <p className={styles.playerHpLabel}>
        {player.hp} / {player.hpMax}
      </p>
      <HpBar player={player} />
    </div>
  );
};

export default PlayerCard;
