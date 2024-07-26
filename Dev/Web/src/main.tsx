import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./shared/global";
import theme from "./shared/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);
