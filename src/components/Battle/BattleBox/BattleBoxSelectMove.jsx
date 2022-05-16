import React from "react";
import Button from "../../Button/Button";

const BattleBoxSelectMove = ({ setNextAction, backUpPlayers }) => {
  return (
    <div>
      <Button
        variant={"secondary"}
        text={"FIGHT"}
        onClickFunction={() =>
          setNextAction("select-pokemon-move", "Which attack will you use?")
        }
      />

      {backUpPlayers.length > 0 && (
        <Button
          variant={"secondary"}
          text={"SWITCH"}
          onClickFunction={() =>
            setNextAction("select-pokemon", "Which Pokemon will you use?")
          }
        />
      )}
    </div>
  );
};

export default BattleBoxSelectMove;
