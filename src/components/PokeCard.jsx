import React from "react";

const PokeCard = ({ pokemon, type, buyPokemon }) => {
  return (
    <>
      <div className="pokeCard">
        <h5>{pokemon.name}</h5>
        <p>{pokemon.id}</p>
        <p>$$ {pokemon.price}</p>
        {type === "store" && (
          <button
            type={"button"}
            name={"comprar"}
            data-id={`${pokemon.id}`}
            onClick={buyPokemon}
          >
            Comprar
          </button>
        )}
      </div>
    </>
  );
};

export default PokeCard;
