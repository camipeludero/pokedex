import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetPokemons = (url, limit) => {
    const [pokemons, setPokemons] = useState({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        try {
            const res = await axios(`${url}/pokemon?limit=${limit}`);
            let all = [];

            for (var i = 0; i < res.data.results.length; i++) {
                const details = await axios(`${res.data.results[i].url}`);


            
                
                let aux = {
                    id: details.data.id,
                    name: details.data.name,
                    image: details.data.sprites.other.dream_world.front_default,
                    types: details.data.types,
                    stats: {
                        [details.data.stats[0].stat.name]: details.data.stats[0].base_stat,
                        [details.data.stats[1].stat.name]: details.data.stats[1].base_stat,
                        [details.data.stats[2].stat.name]: details.data.stats[2].base_stat,
                        [details.data.stats[3].stat.name]: details.data.stats[3].base_stat,
                        [details.data.stats[4].stat.name]: details.data.stats[4].base_stat,
                        [details.data.stats[5].stat.name]: details.data.stats[5].base_stat,
                    },
                    moves: details.data.moves,
                    xp: details.data.base_experience
                };


                all.push(aux);
            }

            setPokemons({
                data: all,
                error: null,
                loading: false,
            });
            
        } catch (error) {
            setPokemons({
                data: [],
                error: error,
                loading: false,
            });
        }
    };

    return [pokemons.data, pokemons.loading, pokemons.error]

}

export default useGetPokemons