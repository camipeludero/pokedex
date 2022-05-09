import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { filterPokemonByName } from "../helpers/functions";
import PokemonList from "./PokemonList";
import Search from "./Search";

const PokemonListContainer = () => {
  const { pokeList, loading, error } = useContext(Context);

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
        results: filterPokemonByName(pokeList, search.query),
      });
    } else {
      setSearch({
        query: "",
        searching: false,
        results: pokeList,
      });
    }
  };

  return (
    <>
      <Search pokeList={pokeList} handleSearch={handleSearch} />

      {search.searching ? (
        <PokemonList
          pokeList={search.results}
          loading={loading}
          error={error}
          /* todo: type={authState.isAuthenticated ? "add" : null} */
        />
      ) : (
        <PokemonList
          pokeList={pokeList}
          loading={loading}
          /* todo: type={authState.isAuthenticated ? "add" : null} */
        />
      )}
    </>
  );
};

export default PokemonListContainer;
