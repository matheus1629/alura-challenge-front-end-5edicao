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
  color: var(--azul-100, #2a7ae4);
  font-size: 16px;
  font-family: Raleway;
  transition: 0.2s;
  &:hover {
    background: ${(props) => props.theme["light-blue-2"]};
    cursor: pointer;
  }


  
  @media (max-width: 1440px) {
    
  }
`;
