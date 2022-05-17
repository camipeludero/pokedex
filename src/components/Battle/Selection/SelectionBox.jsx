import { Button } from "@mui/material";
import React from "react";

const SelectionBox = ({ state, onReady, confirmTeam }) => {
  return (
    <>
      <h2>Select your team</h2>
      <div>
        {state.selected_pokemon.length == 3 &&
          (state.isLoading ? (
            <p>Waiting for opponent...</p>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                onReady(confirmTeam(state.selected_pokemon));
              }}
            >
              CONFIRM TEAM
            </Button>
          ))}
      </div>
    </>
  );
};

export default SelectionBox;
