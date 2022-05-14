import React from "react";
import PokeCard from "../PokemonCard/PokeCard";
import { Grid, Container, Skeleton } from "@mui/material";

const PokemonList = ({ pokemon_data, loading = false, type, action }) => {
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
            : pokemon_data.map((pokemon) => (
                <>
                  <Grid item key={pokemon.name} xs={6} sm={4} md={3}>
                    <PokeCard
                      key={pokemon.name}
                      type={type}
                      pokemon={pokemon}
                      action={action}
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
