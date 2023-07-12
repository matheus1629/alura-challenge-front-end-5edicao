import styled from "styled-components";

export const Section = styled.section`
  padding: 64px 0px;
  background-color: ${(props) => props.theme["section-background"]};

  & *:not(button) {
    background-color: ${(props) => props.theme["section-background"]};
  }

  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 64px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  max-width: 1136px;
  width: 80%;
  margin: auto;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0rem 2rem;
    --button-height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0rem 2rem;
    --button-height: 40px;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductImg = styled.img`
  width: 560px;
  height: 403px;
  object-fit: cover;
  width: 50%;

  @media (max-width: 1280px) {
    width: 392px;
    height: 282px;
  }
  @media (max-width: 768px) {
    width: 98vw;
    height: calc(100vw * 0.6);
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0rem 2rem;
  }
`;

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 52px;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ProductPrice = styled.div`
  color: ${(props) => props.theme["black-3"]};
  font-weight: 700;
`;

export const ProductDescription = styled.div`
  color: ${(props) => props.theme["black-3"]};
  font-weight: 400;
  text-align: justify;
`;
