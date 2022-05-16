import React from "react";

const PokeInfo = ({ pokemon }) => {
  return (
    <div className="pokedetails__Info">
      <div className="pokeInfo">
        <p>{pokemon.weight / 10}kg</p>
        <p className="pokeInfo__label">Weight</p>
      </div>
      <div className="pokeInfo">
        <p>{pokemon.height / 10}m</p>
        <p className="pokeInfo__label">Height</p>
      </div>
      <div className="pokeInfo">
        {pokemon.abilities &&
          pokemon.abilities.map((ability) => (
            <>
              <p key={ability.slot}>{ability.ability.name}</p>
            </>
          ))}
        <p className="pokeInfo__label">Abilities</p>
      </div>
    </div>
  );
};

export default PokeInfo;
