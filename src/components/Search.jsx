import React from 'react'

const Search = ({handleSearch}) => {

  return (
    <>
        <input type="text" name='search' onChange={handleSearch}/>
    </>
  )
}

export default Search