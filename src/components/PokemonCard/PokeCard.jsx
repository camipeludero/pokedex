import React from "react";
import { Link } from "react-router-dom";
import "./pokeCard.css";

const PokeCard = ({ pokemon }) => {
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className={"pokecard"}>
          <div className="pokecard__img">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className={`pokecard__header bg_${pokemon.types[0]}`}>
            <span className="poke__id">#{pokemon.numId}</span>
            <h5 className="poke__name">{pokemon.name}</h5>
          </div>
          <div className="pokecard__types">
            {pokemon.types.map((type) => (
              <span key={type} className={`pokecard__type bg_${type}`}>
                {type}
              </span>
            ))}
          </div>

          {/*todo: add pokemon button when user is authenticated*/}
        </div>
      </Link>
    </>
  );
};

export default PokeCard;
