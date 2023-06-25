import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 182px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: 1px solid var(--azul-100, #2a7ae4);

  color: var(--azul-100, #2a7ae4);
  font-size: 16px;
  font-family: Raleway;
  transition: 0.4s;
  &:hover {
    background: var(--azul-20, #d4e4fa);
  }
`;
