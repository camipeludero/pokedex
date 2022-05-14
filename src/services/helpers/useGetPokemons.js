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
                let types = details.data.types.map((type) => type.type.name);
                let stats = details.data.stats.map(stat => {
                    stat = { name: stat.stat.name, value: stat.base_stat }
                    return stat
                })

                let aux = {
                    id: details.data.id,
                    numId: details.data.id.toString().padStart(3, '0'),
                    name: details.data.name,
                    image: details.data.sprites.other['official-artwork'].front_default,
                    sprites: {
                        front: details.data.sprites.front_default,
                        back: details.data.sprites.back_default
                    },
                    height: details.data.height,
                    weight: details.data.weight,
                    types: types,
                    abilities: details.data.abilities,
                    stats: stats,
                    xp: details.data.base_experience,
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

    return [pokemons.data, pokemons.loading, pokemons.error];
};

export default useGetPokemons;
