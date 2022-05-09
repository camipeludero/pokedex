import React from "react";
import PokeCard from "./PokeCard/PokeCard";
import { Grid, Container, Skeleton } from "@mui/material";

const PokemonList = ({ pokeList, loading = false, type }) => {
  //todo: loading cards optimization

  const array = [];

  for (var i = 0; i < 50; i++) {
    array.push(i);
  }

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={2}>
          {loading
            ? array.map((item) => (
                <>
                  <Grid item key={item} xs={6} sm={4} md={3}>
                    <Skeleton
                      key={item}
                      animation="wave"
                      height={"250px"}
                      sx={{ borderRadius: "10%" }}
                    />
                  </Grid>
                </>
              ))
            : pokeList.map((pokemon) => (
                <>
                  <Grid item key={pokemon.name} xs={6} sm={4} md={3}>
                    <PokeCard
                      key={pokemon.name}
                      type={type}
                      pokemon={pokemon}
                    />
                  </Grid>
                </>
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default PokemonList;
