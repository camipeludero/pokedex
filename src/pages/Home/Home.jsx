import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Layout from "../../layouts/Main/Layout";
import HeroCard from "../../components/Hero/HeroCard";
import pokedex from "../../assets/images/pokedex.png";
import pokemonbattle from "../../assets/images/pokemonbattle.png";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const heroPokedex = {
    title: "Encuentra a tus pokemons favoritos",
    subtitle:
      "Puedes conocer el tipo de Pokémon, sus fortalezas, desventajas y habilidades",
    link: "/pokedex",
    buttonText: "Ir a la Pokedex",
    imgSrc: pokedex,
    imgAlt: "pokedex",
  };

  const heroBattle = {
    title: "Pokemon Battle",
    subtitle:
      "Conviertete en el mejor entrenador pokemon y demuestra tus habilidades.",
    link: "/battle",
    buttonText: "Jugar",
    imgSrc: pokemonbattle,
    imgAlt: "Pokemon Battle",
  };

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
            <HeroCard {...heroPokedex}></HeroCard>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <HeroCard {...heroBattle}></HeroCard>
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

export default Home;
