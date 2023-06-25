import styled from "styled-components";

export const SearchBarInput = styled.input`
  display: flex;
  width: 393px;
  padding: 8px 16px;
  border-radius: 20px;
  border-width: 0px;
  align-items: center;
  gap: 8px;
  background: var(--preto-05, #f5f5f5) url(${(props) => props.icon}) no-repeat
    right center;

  background-position: calc(96%);

  &::placeholder {
    color: var(--preto-50, #a2a2a2);
    font-size: 14px;
    line-height: 16px;
  }
`;
