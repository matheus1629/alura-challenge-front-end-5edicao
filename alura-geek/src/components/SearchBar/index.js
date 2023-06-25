import React from "react";
import { SearchBarInput } from "./style";
import searchBarIcon from '../../assets/searchBarIcon.svg'

const SearchBar = () => {
  return (
    <>
      <SearchBarInput
        placeholder="O que você deseja encontrar?"
        type="search"
        name="search"
        id="search"
        icon={searchBarIcon}
      ></SearchBarInput>
    </>
  );
};

export default SearchBar;
