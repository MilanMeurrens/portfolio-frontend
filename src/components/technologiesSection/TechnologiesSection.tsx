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
          "Throughout the years, I've gained experience with many different technologies. What I'm working on is more important to me than how I do it. The programming language or framework doesn't really matter, as long as it gets things done!"
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
