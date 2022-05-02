import React from "react";
import { Link } from "react-router-dom";
import IconPokeball from "../IconPokeball";
import "./pokeCard.css";

const PokeCard = ({ pokemon, type, buyPokemon }) => {
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="pokecard">
          <div className="pokecard__img">
            <img src={pokemon.image} />
          </div>
          <div className="pokecard__header">
            <span className="poke__id">#{pokemon.id}</span>
            <h5 className="poke__name">{pokemon.name}</h5>
          </div>
          <div className="pokecard__types">
            {pokemon.types.map((type) => (
              <span
                key={type.type.slot}
                className={`pokecard__type bg_${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>

          {type === "store" && (
            <button
              name={"comprar"}
              data-id={`${pokemon.id}`}
              onClick={buyPokemon}
            >
              <span>
                <IconPokeball
                  height={"1rem"}
                  width={"1rem"}
                  color={"#666666"}
                />{" "}
                {pokemon.xp}
              </span>
              ADD
            </button>
          )}
        </div>
      </Link>
    </>
  );
};

export default PokeCard;
