import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
import PokeCard from "./PokeCard/PokeCard";

const PokeList = () => {
  const { user } = useContext(Context);

  return (
    <>
      <p>Mis pokemons: </p>
      {user.ownsPokemons ? (
        user.pokemons.map((poke) => <PokeCard type={"owned"} pokemon={poke} />)
      ) : (
        <p>No tienes ningun pokemon!</p>
      )}
    </>
  );
};

export default PokeList;
