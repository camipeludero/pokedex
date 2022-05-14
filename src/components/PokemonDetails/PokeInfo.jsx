import React from "react";

const PokeInfo = ({ pokemon }) => {
  return (
    <div className="pokedetails__Info">
      <div className="pokeInfo">
        <p>{pokemon.weight / 10}kg</p>
        <p>Weight</p>
      </div>
      <div className="pokeInfo">
        <p>{pokemon.height / 10}m</p>
        <p>Height</p>
      </div>
      <div className="pokeInfo">
        {pokemon.abilities &&
          pokemon.abilities.map((ability) => (
            <>
              <p key={ability.slot}>{ability.ability.name}</p>
            </>
          ))}
        <p>Abilities</p>
      </div>
    </div>
  );
};

export default PokeInfo;
