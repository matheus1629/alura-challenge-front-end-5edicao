import styled from "styled-components";
import {
  BODY_MAX_WIDTH,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../config/consts";

export const WrapperHeader = styled.header`
  display: flex;
  padding: 1rem 0rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  max-width: ${BODY_MAX_WIDTH};
  width: 80%;
  min-height: 115px;
  margin: auto;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 1rem 2rem;
    min-height: 4.5rem;
    width: 100%;
    --search-bar-height: 40px;
  }

  @media (max-width: 1055px) {
    justify-content: space-around;
    gap: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    --button-width: 133px;
    --button-height: 40px;
    --search-bar-width: 100%;
  }
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["white"]};

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 120px;
  }
`;

export const WrapperSerchBarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 30px;

  @media (max-width: 1055px) {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
    padding-bottom: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 0.5rem;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
`;
