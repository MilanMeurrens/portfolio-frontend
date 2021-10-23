import React from "react";
import { Section } from "../../globalComponents";
import SectionHeader from "../../globalComponents/sectionHeader";
import BackgroundAnimation from "../backgroundAnimation";
import { Container } from "./projectsSection.style";

export const ProjectsSection: React.FC<{}> = () => (
  <Section>
    <Container>
      <SectionHeader
        title={"Projects"}
        text={
          "Tesxt afd hfdh fh f  fjdo jdfdf vbsohf gh vnkfhbih uwhvv bkdhkfh knvb dfhj, fdfj df fdkhf fhdhf."
        }
      />
    </Container>
  </Section>
);
