import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/consts";

export const WrapperProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  max-width: 176px;

  &:hover {
    & > img {
      opacity: 0.7;
      transition: opacity 0.4s;
    }
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 168px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 140px;
  }

  @media (max-width: 671px) {
    margin-bottom: 12px;
  }
`;

export const ImageProduct = styled.img`
  width: 176px;
  height: 180px;
  object-fit: cover;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 164px;
    width: 168px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 140px;
    height: 143px;
  }
`;

export const ProductTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: ${(props) => props.theme["black-3"]};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
`;

export const ProductPrice = styled.span`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: ${(props) => props.theme["black-3"]};
  font-size: 1rem;
  font-weight: 700;
`;

export const ProductLink = styled.a`
  color: ${(props) => props.theme["blue"]};
  font-size: 1rem;
  font-weight: 700;
`;
