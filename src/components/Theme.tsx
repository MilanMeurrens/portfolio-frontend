import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  borderRadius: "10px",
  colors: {
    primary: "#262c2d",
    secondary: "#3d4547",
    light: "#979797",
    text: "#8f9494",
    background: "#f8f8f8",
    accent: "#daae49",
  },
};

const Theme: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
