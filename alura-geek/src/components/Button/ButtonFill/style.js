import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--azul-100, #2a7ae4);
  border-width: 0px;
  width: ${(props) => props.width};
  height:  ${(props) => props.height};
  color: var(--preto-branco, #fff);
  font-size: 16px;
`;
