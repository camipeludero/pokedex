import { type_chart } from '../data/type_chart.js';

export const findPokemonById = (list, id) => {
    return list.find(item => item.id == id)
}

export const filterPokemonByName = (list, name) => {
    return list.filter(
        item => { if (item.name.toString().toLowerCase().includes(name.toLowerCase())) { return item } }
    )
}


export const swap = (val1, val2, arr) => {
    if (!arr.includes(val1) || !arr.includes(val2)) return;
    let val1_index = arr.indexOf(val1);
    let val2_index = arr.indexOf(val2);
    arr.splice(val1_index, 1, val2);
    arr.splice(val2_index, 1, val1);
};



export const shuffleArray = (arr) => {
    const shuffled = arr.concat().sort(() => 0.5 - Math.random());
    return shuffled;
};

export const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

export const pickARandomMove = (moves) => {
    let index = randomInt(0, 4);
    let move = moves[index];
    return move;
};

export const getMoveDamage = (move, opponent) => {

    let move_type = move.type;

    let effectiveness = type_chart[move_type][opponent.types[0].toString()];
    let damage = parseInt(move.power * effectiveness);
    return { damage };
};