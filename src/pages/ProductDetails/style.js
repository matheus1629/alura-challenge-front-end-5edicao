import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { RxCheckCircled } from "react-icons/rx";
import { FiArrowRight } from "react-icons/fi";

export const Section = styled.section`
  padding: 64px 0px;
  background-color: ${(props) => props.theme["section-background"]};

  & *:not(button) {
    background-color: ${(props) => props.theme["section-background"]};
  }

  @media (max-width: 1280px) {
    padding: 2rem;
    --message-card-width: 450px;
  }

  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 64px;
    padding: 1rem;
    --message-card-width: 280px;
    --message-font-size: 1rem;
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
    padding: 0rem 1em;
    --button-height: 40px;
  }
`;

export const ProductAddedMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme["light-green"]} !important ;
  padding: 10px;
  width: 550px;
  height: 70px;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 40px;

  & p {
    background-color: ${(props) => props.theme["light-green"]};
    font-weight: 500;
  }

  @media (max-width: 1280px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 280px;
  }
`;

export const CheckIcon = styled(RxCheckCircled)`
  background-color: ${(props) => props.theme["light-green"]} !important;
  font-size: 35px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  gap: 1rem;
  width: 50%;
  height: 403px;

  @media (max-width: 1280px) {
    height: 282px;
  }

  @media (max-width: 768px) {
    width: 100%;
    width: 98vw;
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
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

export const DeleteProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 18px;
  margin-top: auto;
  border: 2px solid ${(props) => props.theme["black-3"]};
  border-radius: 5px;
  padding: 4px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s;
  }
`;

export const TrahsIcon = styled(FaTrashAlt)`
  color: ${(props) => props.theme["black-2"]};
  font-size: 20px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme["blue"]};
  font-size: 1rem;
  font-weight: 700;
`;

export const ArrowIcon = styled(FiArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme["blue"]};
  align-self: baseline;
`;
