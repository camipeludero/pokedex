import React from "react";
import PokemonListContainer from "../../components/PokemonList/PokemonListContainer";
import Layout from "../../layouts/Main/Layout";

const Pokedex = () => {
  return (
    <>
      <Layout>
        <section className="container">
          <PokemonListContainer searchConfig={false} />
        </section>
      </Layout>
    </>
  );
};

export default Pokedex;
