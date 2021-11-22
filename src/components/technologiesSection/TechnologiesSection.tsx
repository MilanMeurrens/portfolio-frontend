import React from "react";
import { Section } from "../../globalComponents";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./technologiesSection.style";
import { technologies } from "../../constants/constants";
import { TechnologyGroup } from "../../types/types";
import TechnologyCard from "../../globalComponents/technologyCard";

export const TechnologiesSection: React.FC<{}> = () => (
  <Section id="technologies">
    <Container>
      <SectionHeader
        title={"Technologies"}
        text={
          "I try to be a 'specialized generalist', combining snippets of knowledge from all my past experiences in different industries together to create things."
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
