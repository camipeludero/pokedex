import { types } from '../types/types';

export const authInitState = () =>
    localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth")) : {
            isAuthenticated: false,
            user: null
        }


export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:

            return {
                ...state,
                isAuthenticated: true,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    pass: action.payload.pass,
                    points: 1000,
                    ownsPokemons: false,
                    pokemons: [],
                }
            }
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }

        default:
            return state
    }
}