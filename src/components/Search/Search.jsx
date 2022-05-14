import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <>
      <input
        className="searchbar"
        type="text"
        name="search"
        placeholder="Buscar Pokemon..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
