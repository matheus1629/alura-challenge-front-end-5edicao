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
  align-self: stretch;

  background-image: var(
    --imagemhero,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%),
    url(${(props) => props.img})
  );
  background-size: cover;
  background-position: center;
`;

export const BannerContent = styled.div`
  display: flex;
  width: 1136px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
  background: transparent;

  & h1 {
    color: var(--preto-branco, #fff);
    font-size: 52px;
    font-weight: 700;
    background: transparent;
  }

  & p {
    color: var(--preto-branco, #fff);
    font-size: 22px;
    font-weight: 700;
    background: transparent;
  }
`;

export const BannerTitle = styled.h1``;
