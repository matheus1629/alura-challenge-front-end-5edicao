import styled from "styled-components";
import { FaImage } from "react-icons/fa";



export const WrapperInputFile = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
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
  outline: 2px dashed ${(props) => props.theme["black-2"]};
  outline-offset: -2px;
  font-size: 12px;
  color: ${(props) => props.theme["black-2"]};
`;

export const FileIcon = styled(FaImage)`
  color: ${(props) => props.theme["black-2"]};
  height: 30px;
  width: 30px;
`;
