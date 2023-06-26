import styled from "styled-components";

export const WrapperProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ImageProduct = styled.img`
  width: 176px;
  height: 174px;
`;

export const ProductTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--preto-100, #464646);
  font-size: 14px;
  font-weight: 500;
`;
export const ProductPrice = styled.span`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--preto-100, #464646);
  font-size: 16px;
  font-weight: 700;
`;
export const ProductLink = styled.a`
  color: var(--azul-100, #2a7ae4);
  font-size: 16px;
  font-weight: 700;
`;
