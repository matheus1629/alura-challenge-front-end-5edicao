import styled from "styled-components";
import { FaImage, FaTrashAlt } from "react-icons/fa";
import { RxCheckCircled } from "react-icons/rx";

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

export const ProductAddedMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.5rem;
  background-color: #65f065;
  padding: 10px;
  width: 550px;
  height: 70px;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 40px;

  & p {
    background-color: #65f065;
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
  background-color: #65f065;
  font-size: 35px;
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

export const WrapperInputFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 120px;
  width: 100%;
  border: 2px dashed ${(props) => props.bordercolor || props.theme["black-2"]}; // use a propriedade ou a cor padrão
  padding: 10px;

  & p {
    font-size: 13px;
    color: ${(props) => props.theme["black-2"]};
  }
`;

export const FileName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  max-width: 50%;
  text-overflow: ellipsis;
`;

export const TrahsIcon = styled(FaTrashAlt)`
  color: ${(props) => props.theme["black-2"]};
  font-size: 25px;
  cursor: pointer;
`;

export const PreviewImg = styled.img`
  max-width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const InputFile = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
`;

export const ButtonFile = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  border: 0px;
`;

export const SupportedFileType = styled.p`
  color: ${(props) => props.color || "none"} !important;
`;

export const SupportedFileSize = styled.p`
  color: ${(props) => props.color || "none"} !important;
`;

export const FileIcon = styled(FaImage)`
  color: ${(props) => props.theme["black-2"]};
  font-size: 30px;
`;

export const WrapperInput = styled.div`
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
  color: ${(props) => props.color || ""};
`;

export const TextField = styled.input`
  padding: 20px 12px 7px 16px;
  width: 100%;
  height: 55px;
  border-width: 0px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["white"]};
  border: ${(props) => props.border || "none"};

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px ${(props) => props.theme["white"]} inset;
  }
`;

export const TextAreaField = styled.textarea`
  padding: 30px 12px 7px 16px;
  width: 100%;
  height: 100px;
  resize: none;
  border-width: 0px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["white"]};
  border: ${(props) => props.border || "none"};
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

export const InputError = styled.p`
  color: red;
  background-color: ${(props) => props.theme["section-background"]};
`;

export const SelectContainer = styled.div`
  width: 50%;
  align-self: self-start;
  background-color: ${(props) => props.theme["section-background"]};
  border: ${(props) => props.border || "none"};
`;

export const Select = styled.select`
  width: 100%;
  height: 55px;
  border: none;
  padding: 0 30px 0 15px;
  background-color: ${(props) => props.theme["white"]};

  &:first-child {
    color: ${(props) => props.color || "none"};
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme["black"]};
`;
