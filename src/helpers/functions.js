export const findPokemonById = (list, id) => {
    return list.find(item => item.id == id)
}

export const filterPokemonByName = (list, name) => {
    return list.filter(
        item => { if (item.name.toString().toLowerCase().includes(name.toLowerCase())) { return item } }
    )
}