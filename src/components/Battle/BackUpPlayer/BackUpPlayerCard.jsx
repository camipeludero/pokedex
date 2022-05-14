import React from "react";
import styles from "./BackUpPlayer.module.css";

const BackUpPlayerCard = ({ player }) => {
  return (
    <div className={`${styles.backUpPlayerCard}`}>
      <div className={`${styles.backUpPlayerCard__sprite}`}>
        <img src={player.sprites.front} alt={player.name} />
      </div>
      <p style={player.has_fainted ? { color: "red" } : { color: "green" }}>
        {player.name}
      </p>
      <p>
        {player.hp}/{player.hpMax}
      </p>
    </div>
  );
};

export default BackUpPlayerCard;
