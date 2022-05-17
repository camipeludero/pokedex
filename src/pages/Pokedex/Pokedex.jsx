import React from "react";
import PokemonListContainer from "../../components/PokemonList/PokemonListContainer";
import Layout from "../../layouts/Main/Layout";

const Pokedex = () => {
  return (
    <>
      <Layout>
        <PokemonListContainer action={"pokedex"} searchConfig={false} />
      </Layout>
    </>
  );
};

export default Pokedex;
