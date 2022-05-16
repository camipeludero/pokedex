import React from "react";
import { Link } from "react-router-dom";
import pokedex from "../../assets/images/pokedex.png";
import pokemonbattle from "../../assets/images/pokemonbattle.png";

import { Box, Button, Typography } from "@mui/material";

import pokedexImg from "../../assets/images/pokedex.png";
import Layout from "../../layouts/Main/Layout";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

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
      <Layout>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slide1">
            <Box>
              <img src={pokedex} alt="pokedex" />
              <Typography variant="h4" gutterBottom component="div">
                Encuentra a tus pokemons favoritos
              </Typography>
              <Typography>
                Puedes conocer el tipo de Pokémon, sus fortalezas, desventajas y
                habilidades
              </Typography>
              <Link to={"/pokedex"}>
                <Button variant="contained">Ir a la Pokedex</Button>
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <Box>
              <img src={pokemonbattle} alt="pokedex" />
              <Typography variant="h4" gutterBottom component="div">
                Pokemon Battle
              </Typography>
              <Typography>
                Conviertete en el mejor entrenador pokemon y demuestra tus
                habilidades.
              </Typography>
              <Link to={"/battle"}>
                <Button variant="contained">JUGAR</Button>
              </Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

export default Home;
