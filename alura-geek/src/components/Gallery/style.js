import styled from "styled-components";

export const WrapperGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const WrapperProducts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const GalleryHeader = styled.div`
  display: flex;
  width: 1133px;
  justify-content: space-between;
  align-items: center;
`;

export const GalleryTitle = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 32px;
  font-weight: 700;
`;

export const LinkAllProducts = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const TextAllProducts = styled.span`
  color: ${(props) => props.theme["blue"]};
  font-size: 16px;
  font-weight: 700;
`;

export const ArrowIcon = styled.span`
  background-image: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
`;
