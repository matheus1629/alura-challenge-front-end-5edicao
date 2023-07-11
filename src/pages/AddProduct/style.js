import styled from "styled-components";
import ButtonFill from "../../components/Button/ButtonFill";

export const Section = styled.section`
  padding: 5.75rem;
  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: 1280px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: auto;
  width: 550px;

  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: 1280px) {
    --button-width: 450px;
    --button-height: 40px;
    width: 450px;
  }

  @media (max-width: 768px) {
    --button-width: 280px;
    --button-height: 40px;
    width: 280px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2rem;
  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
`;

export const WrapperInput = styled.label`
  position: relative;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 12px;
  color: #999;
`;

export const Input = styled.input`
  padding: 20px 12px 7px 16px;
  width: 100%;
  height: 55px;
  border-width: 0px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["white"]};

  &:focus {
    outline: none;
  }
`;

export const InputField = styled.input`
  padding: 10px;
  width: 100%;
  border-width: 0;
  background-color: ${(props) => props.theme["white"]};

  &:focus {
    outline: none;
  }
`;
