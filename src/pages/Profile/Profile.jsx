import React, { useState, useContext } from "react";
import LoadingPage from "../../components/Loading/LoadingPage";
import Layout from "../../layouts/Main/Layout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/auth/AuthContext";
import { types } from "../../services/types/types";

const Profile = () => {
  //todo: merge with Login branch ->user info
  const { authState, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authDispatch({ type: types.LOGOUT });

    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <Layout>
        profile
        <button onClick={handleLogout}>Cerrar sesion</button>
      </Layout>
    </>
  );
};

export default Profile;
