import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  SearchBarInput,
  SearchBarInputWrapper,
  SearchResultsList,
  SeachBarWrapper,
  SearchResultName,
  SearchResultPrice,
  SearchResultWrapper,
  SearchLink,
} from "./style";
import { useLocation } from "react-router-dom";

const SearchBar = ({ width, height }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/products?name_like=${input}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (input !== "") {
          setSearchResults(data.slice(0, 6));
        } else {
          setSearchResults([]);
        }
      });
  }, [input]);

  useEffect(() => {
    setSearchResults([]);
  }, [location]);

  const searchMatch = (productName) => {
    const regex = new RegExp(input, "i");
    const highlightedName = productName.replace(regex, "<strong>$&</strong>");
    return <span dangerouslySetInnerHTML={{ __html: highlightedName }} />;
  };
  
  return (
    <SeachBarWrapper>
      <SearchBarInputWrapper width={width} height={height}>
        <SearchBarInput
          placeholder="O que você deseja encontrar?"
          type="search"
          name="search"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></SearchBarInput>

        <SearchIcon />
      </SearchBarInputWrapper>
      <SearchResultsList>
        {searchResults.map((result) => {
          return (
            <SearchLink
              classNeme="search-link"
              to={`/productdetails/${result.id}`}
            >
              <SearchResultWrapper>
                <SearchResultName>{searchMatch(result.name)}</SearchResultName>
                <SearchResultPrice>
                  {result.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </SearchResultPrice>
              </SearchResultWrapper>
            </SearchLink>
          );
        })}
      </SearchResultsList>
    </SeachBarWrapper>
  );
};

export default SearchBar;
