import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 8px 16px;
  border-radius: 20px;
  border-width: 0px;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme["black-1"]};

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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MagnifierIcon = styled(ReactSVG)`
  position: absolute;
  left: 355px;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 1280px) {
    left: 240px;
  }

  @media (max-width: 768px) {
    position: initial;

  }
`;
