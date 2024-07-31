import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./shared/global";
import theme from "./shared/theme";
import {Provider} from "react-redux";
import {store} from "@/stores/store.ts";
import ErrorBoundary from "@/components/Common/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
