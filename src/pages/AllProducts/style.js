import styled from "styled-components";
import { BODY_MAX_WIDTH, TABLET_BREAKPOINT } from "../../config/consts";

export const Section = styled.section`
  padding: 64px 0px;
  background-color: ${(props) => props.theme["section-background"]};

  & *:not(button) {
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
    --button-height: 40px;
  }
`;



export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 2rem;
  font-weight: 700;
`;

export const SelectContainer = styled.div`
  width: 100%;
  align-self: self-start;
  background-color: ${(props) => props.theme["section-background"]};
  border: ${(props) => props.border || "none"};
`;

export const Select = styled.select`
  font-size: 1.3rem;
  height: 100%;
  border: none;
  padding: 0 30px 0 15px;
  background-color: ${(props) => props.theme["white"]};

  border: solid 2px ${(props) => props.theme["black-3"]};;
  border-radius: 4px;

`;

export const Option = styled.option`
  color: ${(props) => props.theme["black"]};
`;
