import React from "react";
import { Container } from "./sectionHeader.style";

type Props = {
  title: string;
  text?: string;
};

export const SectionHeader: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <div className="title">{title}</div>
      {text && <div className="text">{text}</div>}
    </Container>
  );
};
