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
        <div className={styles.playerSpriteShadow}></div>
      </div>
    </>
  );
};

export default PlayerBox;
