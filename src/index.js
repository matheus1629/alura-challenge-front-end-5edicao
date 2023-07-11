import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./themes/DefaultTheme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
