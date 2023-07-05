import styled from "styled-components";

export const SearchBarInput = styled.input`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 8px 16px;
  border-radius: 20px;
  border-width: 0px;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.theme["black-1"]} url(${(props) => props.icon})
    no-repeat right center;

  background-position: calc(96%);

  &::placeholder {
    color: ${(props) => props.theme["black-2"]};
    font-size: 14px;
    line-height: 16px;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &::-ms-clear {
    display: none;
  }
`;
