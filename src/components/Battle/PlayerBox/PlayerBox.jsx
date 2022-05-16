import React from "react";
import PlayerSprite from "./PlayerSprite";
import PlayerCard from "./PlayerCard";
import styles from "./PlayerBox.module.css";

const PlayerBox = ({ player, type }) => {
  return (
    <>
      <div className={styles.playerBox}>
        <PlayerCard type={type} player={player} />
        <PlayerSprite type={type} player={player} />
        <div className={type === 'user' ? styles.playerSpriteShadow_user : styles.playerSpriteShadow_opponent}></div>
      </div>
    </>
  );
};

export default PlayerBox;
