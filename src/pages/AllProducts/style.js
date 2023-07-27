import styled from 'styled-components'

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
  max-width: 1136px;
  //width: 80%;
  margin: auto;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0rem 2rem;
    --button-height: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
/*   @media (max-width: 671px) {
    max-width: 453px;
  }

  @media (max-width: 532px) {
    max-width: 297px;
  } */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 22px;
  }
`;
