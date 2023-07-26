import { RxCheckCircled } from "react-icons/rx";
import styled from "styled-components";

export const ProductAddedMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.theme["light-green"]} !important;
  padding: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
margin: ${(props) => props.margin};
  /* margin: auto auto  40px auto; */
 

  & p {
    background-color: ${(props) => props.theme["light-green"]} !important;
    font-weight: 500;
  }
`;

export const CheckIcon = styled(RxCheckCircled)`
  background-color: ${(props) => props.theme["light-green"]} !important;
  font-size: ${(props) => props.fontSizeIcon};
`;
