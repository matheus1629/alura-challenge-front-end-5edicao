import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  width: 1136px;
  min-height: 115px;
  margin: auto;
  gap: 1rem;
  
  @media (max-width: 1280px) {
    min-height: 4.5rem;
    width: 100%;
    padding: 1rem 2rem;
    --button-width: 166px;
    --search-bar-width: 272px;
    --search-bar-height: 40px;
  }

  @media (max-width: 768px) {
    --button-width: 133px;
  }
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["white"]};
`;

export const WrapperSerchBarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
