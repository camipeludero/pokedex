import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Context } from './Context';
import { findPokemonById } from './functions';

const PokeDetails = () => {
    const {pokeList} = useContext(Context)
    const {pokemonId} = useParams();

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      setPokemon(findPokemonById(pokeList, pokemonId))
    }, [])
    
console.log(pokemon)
    return (
        <div>
            <svg src="{pokemon.image}" />
            <h3>{pokemon.name}</h3>
            <p>{pokemon.id}</p>
            </div>
    )
}

export default PokeDetails