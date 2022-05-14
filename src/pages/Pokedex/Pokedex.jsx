import React from "react";
import PokemonListContainer from "../../components/PokemonList/PokemonListContainer";

const Pokedex = () => {
  return (
    <>
      <section className="container">
        <PokemonListContainer searchConfig={false} />
      </section>
    </>
  );
};

export default Pokedex;
