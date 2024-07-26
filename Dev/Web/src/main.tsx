import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/global";
import theme from "./shared/theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
