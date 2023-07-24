import styled from "styled-components";

export const Section = styled.section`
  padding: 92px;
  background-color: ${(props) => props.theme["section-background"]};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: auto;
  width: 423px;

  background-color: ${(props) => props.theme["section-background"]};

  @media (max-width: 1280px) {
    --button-width: 350px;
    --button-height: 40px;
    width: 350px;
  }

  @media (max-width: 768px) {
    --button-width: 240px;
    --button-height: 40px;
    width: 240px;
  }
`;

export const TitleLogin = styled.h1`
  background-color: ${(props) => props.theme["section-background"]};
  margin-bottom: 20px;
`;

export const WrapperInput = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  & * {
    background-color: ${(props) => props.theme["section-background"]};
  }
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme["blue"]};
  padding-bottom: 10px;
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
  padding-top: 8px;
  position: absolute;
  margin-top: 65px;
`;

export const InvalidDataError = styled.p`
  color: red;
  position: absolute;
  margin-top: 55px;
  background-color: ${(props) => props.theme["section-background"]};
`;
