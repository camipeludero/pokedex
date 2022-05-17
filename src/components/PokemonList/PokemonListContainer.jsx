import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { filterPokemonByName } from "../../services/helpers/functions";
import PokemonList from "./PokemonList";
import Search from "../Search/Search";

const PokemonListContainer = ({ action, selectPokemon }) => {
  const { state, dispatch, pokemon_data, pokemon_loading, pokemon_error } =
    useContext(Context);
  //const { pokemon_data, pokemon_loading, pokemon_error } = useContext(Context);

  const [search, setSearch] = useState({
    searching: false,
    query: "",
    results: [],
  });

  const handleSearch = (value) => {
    if (value.trim() !== "") {
      setSearch({
        searching: true,
        query: value.toLowerCase(),
        results: filterPokemonByName(pokemon_data, search.query),
      });
    } else {
      setSearch({
        query: "",
        searching: false,
        results: pokemon_data,
      });
    }
  };

  return (
    <>
      <Search pokemon_data={pokemon_data} handleSearch={handleSearch} />

      {search.searching ? (
        <PokemonList
          action={action}
          selectPokemon={selectPokemon}
          pokemon_data={search.results}
          loading={pokemon_loading}
          pokemon_error={pokemon_error}
          /* todo: type={authState.isAuthenticated ? "add" : null} */
        />
      ) : (
        <PokemonList
          action={action}
          selectPokemon={selectPokemon}
          pokemon_data={pokemon_data}
          loading={pokemon_loading}
          /* todo: type={authState.isAuthenticated ? "add" : null} */
        />
      )}
    </>
  );
};

export default PokemonListContainer;
