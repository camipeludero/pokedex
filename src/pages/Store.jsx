import React, { useState, useEffect, useContext } from "react";
import { Context } from "../components/Context";
import { filterPokemonByName } from "../components/functions";
import PokeCard from "../components/PokeCard";
import Search from "../components/Search";

const Store = () => {
  const { user, setUser } = useContext(Context);
  const { pokeList } = useContext(Context);

  const [search, setSearch] = useState({
    searching: false, 
    query: '',
    results: []
  });

  const buyPokemon = (e) => {
    e.preventDefault();

    let selectedId = e.target.dataset.id;
    let pokemon = pokeList.find((poke) => poke.id == selectedId);
    let hasEnoughMoney = user.pokecoins >= pokemon.xp;

    let alreadyOwnsPokemon = user.pokemons.some((poke) => {
      if (poke.id === pokemon.id) {
        return true;
      }
      return false;
    });

    if (!hasEnoughMoney) {
      alert("no tienes dinero");
    } else {
      if (!alreadyOwnsPokemon) {
        alert("pokemon comprado");
        setUser({
          ...user,
          ownsPokemons: true,
          pokemons: [...user.pokemons, pokemon],
          pokecoins: user.pokecoins - pokemon.xp,
        });
      } else {
        alert("Ya tienes este pokemon");
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(
      {
        searching: true, 
        query: e.target.value.toLowerCase(),
        results: filterPokemonByName(pokeList, search.query)
      }
        
    )
}


  return (
    <>
    <Search pokeList={pokeList} handleSearch={handleSearch}/>
      {search.searching ? search.results.map((pokemon) => (
        <PokeCard type={"store"} pokemon={pokemon} buyPokemon={buyPokemon} />
      )) : pokeList.map((pokemon) => (
        <PokeCard type={"store"} pokemon={pokemon} buyPokemon={buyPokemon} />
      ))}
      
    </>
  );
};

export default Store;
