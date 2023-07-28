import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 182px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme["blue"]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme["blue"]};
  font-size: 16px;
  font-family: Raleway;
  transition: 0.3s;
  border-radius: 3px;

  &:hover {
    background: ${(props) => props.theme["light-blue-2"]};
    cursor: pointer;
  }
`;
