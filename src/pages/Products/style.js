import styled from "styled-components";

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
