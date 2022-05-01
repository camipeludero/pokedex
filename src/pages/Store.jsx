import React, { useState, useEffect, useContext } from "react";
import { Context } from "../components/Context";
import PokemonList from "../components/PokemonList";

const Store = () => {
  const { user, setUser } = useContext(Context);
  const { pokeList } = useContext(Context);

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

  return (
    <>
      <PokemonList buyPokemon={buyPokemon} />
    </>
  );
};

export default Store;
