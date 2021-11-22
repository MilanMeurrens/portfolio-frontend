import React from "react";
import { Section } from "../../globalComponents";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./aboutMeSection.style";
import { timelineEvents } from "../../constants/constants";
import { TimelineEvent } from "../../types/types";
import TimelineItem from "../../globalComponents/timelineItem";

export const AboutMeSection: React.FC<{}> = () => (
  <Section id="about">
    <Container>
      <SectionHeader
        title={"About Me"}
        text={
          "Throughout the years, I've gained experience with many different technologies. What I'm working on is more important to me than the programming language or framework I'm using."
        }
      />
      <div className="timeline">
        {timelineEvents.map((event: TimelineEvent) => (
          <TimelineItem event={event} />
        ))}
      </div>
    </Container>
  </Section>
);
