import React from "react";
import { Container } from "./layout.style";

export const Layout: React.FC<{}> = ({ children }) => (
  <Container>{children}</Container>
);
