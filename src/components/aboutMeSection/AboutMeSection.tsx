import React from "react";
import { Section } from "../../globalComponents";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./aboutMeSection.style";
import { timelineEvents } from "../../constants/constants";
import { TimelineEvent } from "../../types/types";
import TimelineItem from "../../globalComponents/timelineItem";

export const AboutMeSection: React.FC<{}> = () => (
  <Section>
    <Container>
      <SectionHeader
        title={"About Me"}
        text={
          "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."
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
