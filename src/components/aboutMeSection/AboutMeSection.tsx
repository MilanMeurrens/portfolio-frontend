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
          "I try to be a 'specialized generalist', combining snippets of knowledge from all my past experience in different industries together."
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
