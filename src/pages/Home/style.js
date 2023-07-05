import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const Banner = styled.div`
  display: flex;
  height: 352px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const BannerContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
  background: transparent;

  & h1 {
    color: ${(props) => props.theme["white"]};
    font-size: 52px;
    font-weight: 700;
    background: transparent;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  & p {
    color: ${(props) => props.theme["white"]};
    font-size: 22px;
    font-weight: 700;
    background: transparent;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const BannerTitle = styled.h1``;
