import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { types } from "../../services/types/types";
import { Context } from "../../context/Context";

const PokemonList = () => {
  const { state, dispatch, pokemon_data } = useContext(Context);

  console.log(pokemon_data);

  const selectPokemon = (id, pokemon_data, is_selected) => {
    dispatch({
      type: types.SELECT_POKEMON,
      id,
      pokemon_data,
      is_selected,
    });
  };
  return (
    <>
      <div>
        {pokemon_data.map((item) => (
          <PokemonCard
            key={item.id}
            pokemon_data={item}
            is_selected={item.is_selected}
            selectPokemon={selectPokemon}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
