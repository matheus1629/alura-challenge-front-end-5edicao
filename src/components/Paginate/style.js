import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 1136px;
`;

export const WrapperProducts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;


  @media (max-width: 671px) {
    flex-wrap: wrap;
  }
`;

export const Pagination = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 200px;
  color: ${(props) => props.theme["blue"]};
`;

export const NumberPage = styled.span`
  cursor: pointer;
  align-self: center;

  color: ${(props) =>
    props.currentpage ? props.theme["blue"] : props.theme["black-2"]};
  font-size: ${(props) => (props.currentpage ? "2rem" : "1.5rem")};
`;

export const BackPageIcon = styled(IoIosArrowBack)`
  color: ${(props) =>
    props.firstpage ? props.theme["black-2"] : props.theme["blue"]};
  cursor: ${(props) => (props.firstpage ? "default" : "pointer")};
  width: 2rem;
  height: 2rem;
  user-select: none;
`;

export const ForwardPageIcon = styled(IoIosArrowForward)`
  color: ${(props) =>
    props.lastpage ? props.theme["black-2"] : props.theme["blue"]};
  cursor: ${(props) => (props.lastpage ? "default" : "pointer")};
  width: 2rem;
  height: 2rem;
  user-select: none;
`;
