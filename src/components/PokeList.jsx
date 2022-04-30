import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";

const PokeList = () => {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <>
      <p>Mis pokemons: </p>
      {user.ownsPokemons ? (
        user.pokemons.map((poke) => <li>{poke.name}</li>)
      ) : (
        <p>No tienes ningun pokemon!</p>
      )}
    </>
  );
};

export default PokeList;
