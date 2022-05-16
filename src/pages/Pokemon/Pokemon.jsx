import React from "react";
import PokeDetails from "../../components/PokemonDetails/PokeDetails";
import Layout from "../../layouts/Main/Layout";
import "./pokeDetails.css";

const Pokemon = () => {
  return (
    <>
      <Layout>
        <PokeDetails />
      </Layout>
    </>
  );
};

export default Pokemon;
