import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (url, limit) => {


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

export default useGetData