export const  findPokemonById = (list, id) => {
    return list.find(item => item.id == id)
}

export const filterPokemonByName = (list, name) => {
    return list.filter(item => item.name.indexOf(name) > -1)
}