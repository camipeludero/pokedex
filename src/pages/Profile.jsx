import React, { useContext } from "react";
import { Context } from "../components/Context";
import PokeList from "../components/MyPokemons";

const Profile = () => {
  const { user, setUser } = useContext(Context);
  return (
    <>
      <h4>Mi Perfil</h4>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>

      <button>Editar perfil</button>
    </>
  );
};

export default Profile;
