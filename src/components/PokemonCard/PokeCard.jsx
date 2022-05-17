import React from "react";
import { useNavigate } from "react-router-dom";
import "./pokeCard.css";

const PokeCard = ({ pokemon, is_selected, selectPokemon, action }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`pokecard ${is_selected && "selected_card"}`}
        onClick={() =>
          action === "pokedex"
            ? navigate(`/pokemon/${pokemon.id}`)
            : action === "select-pokemon"
            ? selectPokemon(pokemon.id, pokemon, is_selected)
            : null
        }
      >
        <p className="poke__id">#{pokemon.numId}</p>
        <div className="pokecard__img">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className={`pokecard__header bg_${pokemon.types[0]}`}>
          <h5 className="poke__name">{pokemon.name}</h5>
        </div>
        <div className="pokecard__types">
          {pokemon.types.map((type) => (
            <span key={type} className={`pokecard__type bg_${type}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
      {/*todo: add pokemon button when user is authenticated*/}
    </>
  );
};

export default PokeCard;
