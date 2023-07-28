import React from "react";

import { ErrorMessage } from "./style";

const ErrorMessageAPI = ({ errorMessage }) => {
  return (
    <ErrorMessage>
      Ocorreu um erro ao buscar os dados: {errorMessage}
    </ErrorMessage>
  );
};

export default ErrorMessageAPI;
