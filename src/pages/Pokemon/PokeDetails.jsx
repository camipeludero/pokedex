import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../components/Context";
import { findPokemonById } from "../../components/functions";
import "./pokeDetails.css";

const PokeDetails = () => {
  const { pokeList } = useContext(Context);

  const { user, setUser } = useContext(Context);

  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setPokemon(findPokemonById(pokeList, pokemonId));
  }, [pokeList]);

  console.log(pokemon);

  return (
    <>
      {!pokemon ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="container">
            <div className="pokedetails">
              <div className="pokedetails__img">
                <img src={pokemon.image} />
              </div>
            </div>
            <div className="pokedetails__header">
              <h3 className="poke__id">#{pokemon.id}</h3>
              <h2 className="poke__name">{pokemon.name}</h2>
            </div>
            <div className="pokedetails__types">
              {pokemon.types &&
                pokemon.types.map((type) => (
                  <span
                    key={type.type.slot}
                    className={`pokedetails__type bg_${type.type.name}`}
                  >
                    {type.type.name}
                  </span>
                ))}
            </div>
            <div className="pokedetails__about">
              <p>Weight:{pokemon.weight / 10}kg</p>
              <p>Height:{pokemon.height / 10}m</p>
              <p>abilities:</p>
              {pokemon.abilities &&
                pokemon.abilities.map((ability) => (
                  <>
                    <p key={ability.slot}>{ability.ability.name}</p>
                  </>
                ))}
            </div>
            <div className="pokedetails__stats">
              <h5>Stats</h5>
              {pokemon.stats &&
                pokemon.stats.map((stat) => (
                  <>
                    <p key={Object.keys(stat)}>{Object.keys(stat)}</p>
                    <p key={Object.values(stat)}>{Object.values(stat)}</p>
                  </>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeDetails;
