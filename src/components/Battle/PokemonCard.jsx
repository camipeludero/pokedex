import React from "react";

export const styles = {
  card: {
    margin: "16px",
    border: "1px solid red",
    cursor: "pointer",
  },
  selected_card: {
    border: "1px solid green",
    margin: "16px",
    cursor: "pointer",
  },
};

const PokemonCard = ({ pokemon_data, selectPokemon, is_selected }) => {
  return (
    <>
      <div
        style={is_selected ? styles.selected_card : styles.card}
        onClick={() => {
          selectPokemon(pokemon_data.id, pokemon_data, is_selected);
        }}
      >
        {pokemon_data.name}
      </div>
    </>
  );
};

export default PokemonCard;
