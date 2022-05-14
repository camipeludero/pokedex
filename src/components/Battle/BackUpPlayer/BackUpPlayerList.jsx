import React from "react";
import BackUpPlayerCard from "./BackUpPlayerCard";
import styles from "./BackUpPlayer.module.css";

const BackUpPlayerList = ({ team }) => {
  return (
    <div className={`${styles.backUpPlayerList}`}>
      {team.map((player) => (
        <BackUpPlayerCard player={player} />
      ))}
    </div>
  );
};

export default BackUpPlayerList;
