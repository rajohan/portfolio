import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import "normalize.css";

import { defaultTheme } from "../themes";
import { GlobalStyles } from "../themes";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <React.StrictMode>
                <Component {...pageProps} />
            </React.StrictMode>
        </ThemeProvider>
    );
};

export default App;
