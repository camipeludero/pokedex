import React from "react";
import BackUpPlayerList from "./BackUpPlayerList";
import styles from "./BackUpPlayer.module.css";

const BackUpPlayerContainer = ({ opponentTeam, userTeam }) => {
  return (
    <div className={`${styles.backUpPlayerContainer}`}>
      <BackUpPlayerList team={opponentTeam} />
      <BackUpPlayerList team={userTeam} />
    </div>
  );
};

export default BackUpPlayerContainer;
