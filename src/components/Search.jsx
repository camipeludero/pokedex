import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <>
      <input
        type="text"
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
