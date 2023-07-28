import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${(props) => props.theme["blue"]};
  border-width: 0px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme["white"]};
  font-size: 16px;
  transition: 0.3s;
  border-radius: 3px;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme["button-fill-hover"]};
  }
`;
