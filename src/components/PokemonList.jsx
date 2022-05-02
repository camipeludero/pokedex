import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Context";
import { filterPokemonByName } from "./functions";
import PokeCard from "./PokeCard/PokeCard";
import PokeList from "./PokemonList";
import Search from "./Search";

const PokemonList = ({ buyPokemon }) => {
  const { pokeList } = useContext(Context);
  const { user, setUser } = useContext(Context);

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
      <div className="pokemonList">
        {search.searching
          ? search.results.map((pokemon) => (
              <PokeCard
                key={pokemon.id}
                type={"store"}
                pokemon={pokemon}
                buyPokemon={buyPokemon}
              />
            ))
          : pokeList.map((pokemon) => (
              <PokeCard
                type={"store"}
                pokemon={pokemon}
                buyPokemon={buyPokemon}
              />
            ))}{" "}
      </div>
    </>
  );
};

export default PokemonList;
