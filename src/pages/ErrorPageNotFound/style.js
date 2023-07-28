import styled from "styled-components";

export const Section = styled.section`
  padding: 64px 0px;
  background-color: ${(props) => props.theme["section-background"]};

  & * {
    background-color: ${(props) => props.theme["section-background"]};
  }
`;

export const WrapperMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & > h1,
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["black-3"]};
  }
`;
