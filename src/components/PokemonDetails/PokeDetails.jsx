import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { findPokemonById } from "../../services/helpers/functions";
import PokeStats from "./PokeStats";
import PokeInfo from "./PokeInfo";

import { Container } from "@mui/material";

const PokeDetails = () => {
  const { pokemon_data } = useContext(Context);

  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setPokemon(findPokemonById(pokemon_data, pokemonId));
  }, [pokemon_data]);

  return (
    <>
      <Container>
        {!pokemon ? (
          <p>Cargando...</p>
        ) : (
          <>
            <div className="pokemondetails">
              <div className="pokedetails">
                <div className="pokedetails__bg">
                  <div className="pokedetails__img">
                    <img src={pokemon.image} alt={pokemon.name} />
                  </div>
                </div>
                <div className="pokedetails__header">
                  <h3 className="poke__id">#{pokemon.numId}</h3>
                  <h2 className="poke__name">{pokemon.name}</h2>
                </div>
                <div className="pokedetails__types">
                  {pokemon.types &&
                    pokemon.types.map((type) => (
                      <span
                        key={type}
                        className={`pokedetails__type bg_${type}`}
                      >
                        {type}
                      </span>
                    ))}
                </div>
                <PokeInfo pokemon={pokemon} />
              </div>
              <PokeStats pokemon={pokemon} />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default PokeDetails;
