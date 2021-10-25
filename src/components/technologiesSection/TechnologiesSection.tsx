import React from "react";
import { Section } from "../../globalComponents";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./technologiesSection.style";
import { technologies } from "../../constants/constants";
import { TechnologyGroup } from "../../types/types";
import TechnologyCard from "../../globalComponents/technologyCard";

export const TechnologiesSection: React.FC<{}> = () => (
  <Section>
    <Container>
      <SectionHeader
        title={"Technologies"}
        text={
          "Tesxt afd hfdh fh f  fjdo jdfdf vbsohf gh vnkfhbih uwhvv bkdhkfh knvb dfhj, fdfj df fdkhf fhdhf."
        }
      />
      <div className="technology-groups">
        {technologies.map((group: TechnologyGroup) => (
          <TechnologyCard technologyGroup={group} />
        ))}
      </div>
    </Container>
  </Section>
);
