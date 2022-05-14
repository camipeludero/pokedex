export const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    //Battle Types
    INITIALIZE_STATE: 'INITIALIZE_STATE',
    SELECT_POKEMON: 'SELECT_POKEMON', //seleccionar un pokemon
    READY_TO_BATTLE: 'READY_TO_BATTLE',
    SET_POKEMON: 'SET_POKEMON',
    SET_NEXT_ACTION: 'SET_NEXT_ACTION',
    SET_PLAYER_HP: 'SET_PLAYER_HP',
    REMOVE_PLAYER: 'REMOVE_PLAYER',
    FAINT_PLAYER: 'FAINT_PLAYER',
    LOADING: 'LOADING',
    ATTACK: 'ATTACK',
    WIN: 'WIN',
    GAME_OVER: 'GAME_OVER',
}

/*
action: "",
action_text: "",
gameInfo: {
  opponent: {
    player: {},
    team: []
  },
  user: {
    player: {},
    team: []
  }
},
isLoading: bool,
isReady: bool,
pokemon: [],
selected_pokemon: []

*/