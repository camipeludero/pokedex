import React from "react";
import { Link } from "react-router-dom";
import PokeDetails from "../../components/PokemonDetails/PokeDetails";
import Layout from "../../layouts/Main/Layout";
import "./pokeDetails.css";
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Pokemon = () => {
  return (
    <>
      <Layout>
        <Link to={-1}>
          <Fab
            sx={{
              position: "absolute",
              top: 80,
              left: 16,
              filter: "drop-shadow(0px 2px 0px #18191F)",
              border: "2px solid #18191F",
              backgroundColor: "#ffffff",
              boxShadow: "none",
            }}
            color="primary"
            aria-label="add"
          >
            <ArrowBackIcon sx={{ color: "#18191F" }} />
          </Fab>
        </Link>
        <PokeDetails />
      </Layout>
    </>
  );
};

export default Pokemon;
