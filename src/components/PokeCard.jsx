import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ pokemon, type, buyPokemon }) => {
  return (
    <>
    <Link to={`/pokemon/${pokemon.id}`}>
    
      <div className="pokeCard">
        <h5>{pokemon.name}</h5>
        <p>{pokemon.id}</p>
        <p>$$ {pokemon.xp}</p>
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
        </Link>
    </>
  );
};

export default PokeCard;
