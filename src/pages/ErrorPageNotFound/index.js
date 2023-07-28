import React from "react";
import { Section, WrapperMessage } from "./style";

export const ErrorPageNotFound = () => {
  return (
    <Section>
      <WrapperMessage>
        <h1>404</h1>
        <h2>Página não encontrada.</h2>
      </WrapperMessage>
    </Section>
  );
};

export default ErrorPageNotFound;
