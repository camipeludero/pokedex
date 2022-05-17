import React from "react";
import PokeCard from "../PokemonCard/PokeCard";
import { Grid, Container, Skeleton } from "@mui/material";

const PokemonList = ({
  pokemon_data,
  loading = false,
  type,
  action,
  selectPokemon,
}) => {
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
            ? array.map((item, i) => (
                <Grid item key={i} xs={6} sm={4} md={3}>
                  <Skeleton
                    key={item}
                    animation="wave"
                    height={"250px"}
                    sx={{ borderRadius: "10%" }}
                  />
                </Grid>
              ))
            : pokemon_data.map((pokemon) => (
                <Grid item key={pokemon.name} xs={6} sm={4} md={3}>
                  <PokeCard
                    is_selected={pokemon.is_selected}
                    key={pokemon.name}
                    type={type}
                    pokemon={pokemon}
                    action={action}
                    selectPokemon={selectPokemon}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default PokemonList;
