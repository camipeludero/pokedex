import React from "react";
import styles from "./PlayerBox.module.css";

const PlayerSprite = ({ player, type }) => {
  let sprite = type === "user" ? player.sprites.back : player.sprites.front;

  return (
    <div
      className={
        type === "user"
          ? styles.playerSprite__user
          : styles.playerSprite__opponent
      }
    >
      <img src={sprite} alt={player.name} />
    </div>
  );
};

export default PlayerSprite;
