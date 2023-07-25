import styled from "styled-components";

export const WrapperGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 1136px;
`;

export const GalleryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 671px) {
    max-width: 453px;
  }

  @media (max-width: 532px) {
    max-width: 297px;
  }
`;

export const WrapperProducts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 671px) {
    flex-wrap: wrap;
  }
`;

export const GalleryTitle = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 22px;
  }
`;
