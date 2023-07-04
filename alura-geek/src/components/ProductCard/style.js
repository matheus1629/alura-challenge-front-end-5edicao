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
  color: ${(props) => props.theme["black-3"]};
  font-size: 14px;
  font-weight: 500;
`;
export const ProductPrice = styled.span`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: ${(props) => props.theme["black-3"]};
  font-size: 16px;
  font-weight: 700;
`;
export const ProductLink = styled.a`
  color: ${(props) => props.theme["blue"]};
  font-size: 16px;
  font-weight: 700;
`;
