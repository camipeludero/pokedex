import React from "react";

export const styles = {
  player: {
    margin: "16px",
    border: "1px solid blue",
  },
};

const OpponentBox = ({ player }) => {
  return (
    <>
      <div style={styles.player}>
        <img src={player.sprites.front} alt={player.name} />
        <h3>{player.name}</h3>
        <p>
          hp: {player.hp} / {player.hpMax}
        </p>
      </div>
    </>
  );
};

export default OpponentBox;
