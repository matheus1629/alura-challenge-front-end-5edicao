import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { DefaultTheme } from "./themes/DefaultTheme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
