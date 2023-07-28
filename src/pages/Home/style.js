import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import {
  BODY_MAX_WIDTH,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../config/consts";

export const Section = styled.section`
  padding: 64px 0px;
  background-color: ${(props) => props.theme["section-background"]};

  & * {
    background-color: ${(props) => props.theme["section-background"]};
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  max-width: ${BODY_MAX_WIDTH};
  width: 80%;
  margin: auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
    padding: 0rem 2rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  height: 352px;
  padding: 2rem 0rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const BannerContent = styled.div`
  display: flex;
  max-width: ${BODY_MAX_WIDTH};
  width: 80%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
  background: transparent;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
    padding: 2rem;
  }

  & h1 {
    color: ${(props) => props.theme["white"]};
    font-size: 52px;
    font-weight: 700;
    background: transparent;

    @media (max-width: ${MOBILE_BREAKPOINT}) {
      font-size: 35px;
    }
  }

  & p {
    color: ${(props) => props.theme["white"]};
    font-size: 22px;
    font-weight: 700;
    background: transparent;

    @media (max-width: ${MOBILE_BREAKPOINT}) {
      font-size: 15px;
    }
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme["blue"]};
  font-size: 1rem;
  font-weight: 700;
`;

export const ArrowIcon = styled(FiArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme["blue"]};
  align-self: baseline;
`;
