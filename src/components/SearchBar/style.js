import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SeachBarWrapper = styled.div`
  position: relative;
`;

export const SearchBarInputWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme["section-background"]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 8px 16px;
  border-radius: 20px;

  @media (max-width: 1280px) {
    height: ${(props) => props.height};
  }

  @media (max-width: 768px) {
    height: ${(props) => props.height};
  }
`;

export const SearchBarInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  &::placeholder {
    color: ${(props) => props.theme["black-2"]};
    font-size: 14px;
    line-height: 16px;
  }

  &:focus {
    outline: none;
  }

  &::-ms-clear {
    display: none;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  background-color: ${(props) => props.theme["section-background"]};
  width: 30px;
  height: 100%;
  color: ${(props) => props.theme["black-2"]};
`;

export const SearchResultsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: absolute;
  margin-top: -5px;
  background-color: ${(props) => props.theme["section-background"]};
  z-index: 3;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["section-background"]};
  padding: 20px 15px;
  border-radius: 20px;

  &:hover {
    background-color: #bfbfbf;
    cursor: pointer;

    & * {
      background-color: #bfbfbf;
    }
  }

  & * {
    background-color: ${(props) => props.theme["section-background"]};
  }
`;

export const SearchResultName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  max-width: 60%;
`;

export const SearchResultPrice = styled.p``;

export const SearchLink = styled(Link)`
  color: ${(props) => props.theme["black-3"]};
  border-radius: 20px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }


`;
