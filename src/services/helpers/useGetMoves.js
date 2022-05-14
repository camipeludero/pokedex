import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetMoves = (url, limit) => {
    const [moves, setMoves] = useState({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        getMoves();
    }, []);

    const getMoves = async () => {
        try {
            const res = await axios(`${url}/move?limit=${limit}`);
            let all = [];

            for (var i = 0; i < res.data.results.length; i++) {
                const details = await axios(`${res.data.results[i].url}`);

                let aux = {
                    id: details.data.id,
                    name: details.data.name,
                    accuracy: details.data.accuracy,
                    power: details.data.power,
                    type: details.data.type.name,
                    learned_by_pokemon: details.data.learned_by_pokemon,
                };

                all.push(aux);
            }

            setMoves({
                data: all,
                error: null,
                loading: false,
            });
        } catch (error) {
            setMoves({
                data: [],
                error: error,
                loading: false,
            });
        }
    };

    return [moves.data, moves.loading, moves.error];
};

export default useGetMoves;
