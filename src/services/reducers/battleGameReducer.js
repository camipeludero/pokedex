import { types } from '../types/types';

export const battleGameReducer = (state, action) => {
  switch (action.type) {
    case types.INITIALIZE_STATE:
      return { ...state, pokemons: action.pokemon_data };
    /* Selection Reducers */

    case types.SELECT_POKEMON:
    case types.SELECT_POKEMON:
      let pokemons = [...state.pokemons];
      let selected_pokemon = [...state.selected_pokemon];

      const is_selected = action.is_selected;

      if (state.selected_pokemon.length < 3 || is_selected) {
        pokemons = pokemons.map((pokemon) => {
          if (pokemon.id == action.id) {
            //verifica si el pokemon ya estaba seleccionado (toggle select)
            pokemon.is_selected = !is_selected;
          }
          return pokemon;
        });

        if (is_selected) {
          const index_to_remove = selected_pokemon.findIndex(
            (pokemon) => pokemon.id == action.id
          );
          //quita el pokemon de la lista
          selected_pokemon.splice(index_to_remove, 1);
        } else {
          //agrega el pokemon a la lista
          selected_pokemon.push(action.pokemon_data);
        }
      }

      return { ...state, pokemons, selected_pokemon };


    case types.LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case types.READY_TO_BATTLE:
      return {
        ...state,
        isReady: !state.isReady,
        gameInfo: action.gameInfo,
      };

    /* Battle Reducers */

    case types.WIN:
      return {
        ...state,
        isWinner: true,
      };

    case types.GAME_OVER:
      return {
        ...state,
        isLooser: true,
      };

    case types.SET_POKEMON:
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          [action.player_type]: {
            ...state.gameInfo[action.player_type],
            player: action.next,
          },
        },
      };

    case types.SET_PLAYER_HP:
      let updatedPlayer = {
        ...state.gameInfo[action.player_type].player,
        hp: action.newHp,
      };
      let updatedTeam = [...state.gameInfo[action.player_type].team];

      let updatedPlayerIndex = updatedTeam.indexOf(
        state.gameInfo[action.player_type].player
      );
      updatedTeam[updatedPlayerIndex] = updatedPlayer;

      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          [action.player_type]: {
            player: updatedPlayer,
            team: updatedTeam,
          },
        },
      };

    case types.SET_NEXT_ACTION:
      return {
        ...state,
        next_action: action.next_action,
        screen_text: action.screen_text,
      };

    case types.FAINT_PLAYER:
      let updatedFaintPlayer = {
        ...state.gameInfo[action.player_type].player,
        has_fainted: true,
      };
      let updatedFaintTeam = [...state.gameInfo[action.player_type].team];
      let updatedFaintPlayerIndex = updatedFaintTeam.indexOf(
        state.gameInfo[action.player_type].player
      );
      updatedFaintTeam[updatedFaintPlayerIndex] = updatedFaintPlayer;

      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          [action.player_type]: {
            player: updatedFaintPlayer,
            team: updatedFaintTeam,
          },
        },
      };
    default:
      return state;
  }
};
