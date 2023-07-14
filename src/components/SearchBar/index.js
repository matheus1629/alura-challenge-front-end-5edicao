import React from "react";
import { SearchIcon, SearchBarInput, SearchBarWrapper } from "./style";
import searchBarIcon from "../../assets/Icons/searchBarIcon.svg";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ width, height }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        placeholder="O que você deseja encontrar?"
        type="search"
        name="search"
        id="search"
        width={width}
        height={height}
      ></SearchBarInput>
      <SearchIcon />
      {/* <MagnifierIcon src={searchBarIcon} /> */}
    </SearchBarWrapper>
  );
};

export default SearchBar;
