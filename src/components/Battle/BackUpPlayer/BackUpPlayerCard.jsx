import React from "react";
import styles from "./BackUpPlayer.module.css";

const BackUpPlayerCard = ({ player }) => {
  return (
    <div
      className={`${styles.backUpPlayerCard} ${
        player.has_fainted ? styles.backUpPlayerCardFainted : null
      }`}
    >
      <div className={`${styles.backUpPlayerCard__sprite}`}>
        <img src={player.sprites.front} alt={player.name} />
      </div>
      <p>{player.name}</p>
      <p>
        {player.hp}/{player.hpMax}
      </p>
    </div>
  );
};

export default BackUpPlayerCard;
