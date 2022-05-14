import React from "react";

const HpBar = ({ player }) => {
  return (
    <div>
      <p>
        hp: {player.hp} / {player.hpMax}
      </p>
    </div>
  );
};

export default HpBar;
