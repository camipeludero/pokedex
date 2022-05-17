import React from "react";
import { Button } from "@mui/material";

const BattleBoxSelectMove = ({ setNextAction, backUpPlayers }) => {
  return (
    <div>
      <Button
        variant={"contained"}
        onClick={() =>
          setNextAction("select-pokemon-move", "Which attack will you use?")
        }
      >
        FIGHT
      </Button>

      {backUpPlayers.length > 0 && (
        <Button
          variant={"contained"}
          onClick={() =>
            setNextAction("select-pokemon", "Which Pokemon will you use?")
          }
        >
          SWITCH
        </Button>
      )}
    </div>
  );
};

export default BattleBoxSelectMove;
