import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  padding: 32px 0px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  width: 78%;
  margin: auto;
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["white"]};
`;

export const WrapperSerchBarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
