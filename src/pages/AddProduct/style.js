import styled from "styled-components";
import { FaImage, FaTrashAlt } from "react-icons/fa";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/consts";

export const Section = styled.section`
  padding: 5.75rem;
  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2rem;
    --message-card-width: 450px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1rem;
    --message-card-width: 280px;
    --message-font-size: 1rem;
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    --button-width: 450px;
    --button-height: 40px;

    width: 450px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    --button-width: 280px;
    --button-height: 40px;

    width: 280px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2rem;
  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.5rem;
  }
`;

export const WrapperInputFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 200px;
  width: 100%;
  border: 2px dashed ${(props) => props.bordercolor || props.theme["black-2"]}; // use a propriedade ou a cor padrão
  padding: 10px;
  border-radius: 3px;

  & p {
    font-size: 13px;
    color: ${(props) => props.theme["black-2"]};
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    height: 250px;
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
  max-width: 65%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    height: 70%;
  }
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
  border-radius: 3px;
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
  border-radius: 3px;
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

export const SelectContainer = styled.div`
  width: 100%;
  align-self: self-start;
  background-color: ${(props) => props.theme["section-background"]};
  border: ${(props) => props.border || "none"};
  border-radius: 3px;
`;

export const Select = styled.select`
  width: 100%;
  height: 55px;
  border: none;
  padding: 0 30px 0 15px;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 3px;

  &:first-child {
    color: ${(props) => props.color || "none"};
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme["black"]};
`;
