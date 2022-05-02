import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";

const Search = ({ handleSearch, arrowBack }) => {
  return (
    <>
      <input
        className="searchbar"
        type="text"
        name="search"
        placeholder="Search Pokemon"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
