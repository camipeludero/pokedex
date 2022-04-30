import React, { useState, useEffect, useContext } from "react";
import { Context } from "../components/Context";
import PokeCard from "../components/PokeCard";

const Store = () => {
  const { user, setUser } = useContext(Context);
  const { pokemons } = useContext(Context);

  const buyPokemon = (e) => {
    e.preventDefault();

    let selectedId = e.target.dataset.id;
    let pokemon = pokemons.find((poke) => poke.id == selectedId);

    let hasEnoughMoney = user.pokecoins >= pokemon.price;
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
          pokecoins: user.pokecoins - pokemon.price,
        });
      } else {
        alert("Ya tienes este pokemon");
      }
    }
  };

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokeCard type={"store"} pokemon={pokemon} buyPokemon={buyPokemon} />
      ))}
    </>
  );
};

export default Store;
