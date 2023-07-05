import React from "react";
import { MagnifierIcon, SearchBarInput, SearchBarWrapper } from "./style";
import searchBarIcon from "../../assets/Icons/searchBarIcon.svg";

const SearchBar = ({ width, height }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        placeholder="O que você deseja encontrar?"
        type="search"
        name="search"
        id="search"
        icon={searchBarIcon}
        width={width}
        height={height}
      ></SearchBarInput>
      <MagnifierIcon src={searchBarIcon} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
