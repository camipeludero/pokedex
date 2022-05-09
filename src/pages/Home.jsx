import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import {
  Container,
  Button,
  Card,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

import pokedexImg from "../assets/images/pokedex.png";

const Home = () => {
  //todo: user authentication
  /*  {!authState.isAuthenticated ? (
        <Link to={"/login"}>Inicia sesion para jugar</Link>
        ) : (
          <>
            <h5>Hola {authState.user.name}</h5>
            {!authState.user.ownsPokemons ? (
              <p>No tienes ningun pokemon</p>
            ) : (
              <PokemonList type={"owned"} pokeList={authState.user.pokemons} />
            )} 
          </>
        )}*/

  return (
    <>
      {}
      <CssBaseline />
      <Container sx={{ py: 8 }} maxWidth="sm">
        <Card sx={{ background: "#F9CF30" }}>
          <div className={"pokedex_img"}>
            <img src={pokedexImg} />
          </div>
          <CardContent>
            <Typography variant="h3" gutterBottom component="div">
              Encuentra a tus pokemons favoritos
            </Typography>
            <Typography>
              Puedes conocer el tipo de Pokémon, sus fortalezas, desventajas y
              habilidades
            </Typography>
            <Link to={"/pokedex"}>
              <Button variant="contained">Ir a la Pokedex</Button>
            </Link>
          </CardContent>
        </Card>
        <Card sx={{ background: "#9AD6DF" }}>
          <CardContent>
            <img src={logo} alt="logo" />
            <Typography variant="h3" gutterBottom component="div">
              BATTLE
            </Typography>
            <Link to={"/battle"}>
              <Button variant="contained">JUGAR</Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Home;
