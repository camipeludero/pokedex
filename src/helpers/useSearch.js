import React, { useState } from 'react';
import { filterPokemonByName } from '../components/functions';

export const useSearch = (list, value) => {
    const [state, setState] = useState({
        searching: false,
        query: '',
        results: list
    });

    if (value !== "") {
        setState({
            searching: true,
            query: value.toLowerCase(),
            results: filterPokemonByName(list, search.query),
        });
    } else {
        setState({
            query: "",
            searching: false,
            results: list,
        });
    }

    return [state.searching, state.results, state.query]
}

export default useSearch
