import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  padding: 1rem 0rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  max-width: 1136px;
  width: 80%;
  min-height: 115px;
  margin: auto;

  @media (max-width: 1280px) {
    padding: 1rem 2rem;
    min-height: 4.5rem;
    width: 100%;
    --button-width: 185px;
    --search-bar-width: 272px;
    --search-bar-height: 40px;
  }

  @media (max-width: 768px) {
    --button-width: 133px;
    --button-height: 40px;
    --search-bar-width: 50px;
    gap: 0.5rem;
    align-items: start;
  }
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["white"]};

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const WrapperSerchBarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    // flex-direction: column;
  }
`;
