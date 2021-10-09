import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global.style";
import { darkTheme } from "./themes";

const Theme: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
