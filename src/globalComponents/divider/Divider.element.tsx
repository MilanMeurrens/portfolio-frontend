import React from "react";
import { Section } from "..";
import { Container } from "./divider.style";

export const Divider: React.FC<{}> = () => {
  return (
    <Section>
      <Container>
        <div className="divider"></div>
      </Container>
    </Section>
  );
};
