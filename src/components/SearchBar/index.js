import React from "react";
import { SearchBarInput } from "./style";
import searchBarIcon from "../../assets/Icons/searchBarIcon.svg";

const SearchBar = ({width, height}) => {
  return (
    <SearchBarInput
      placeholder="O que você deseja encontrar?"
      type="search"
      name="search"
      id="search"
      icon={searchBarIcon}
      width={width} height={height}
    ></SearchBarInput>
  );
};

export default SearchBar;
