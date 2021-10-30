import React from "react";
import { TimelineEvent } from "../../types/types";
import { Container } from "./timelineItem.style";

type Props = {
  event: TimelineEvent;
};

export const TimelineItem: React.FC<Props> = ({ event }) => {
  return (
    <Container>
      <div className="date">{event.date}</div>
      <div className="content">
        <div className="title">{event.title}</div>
        <div className="description">{event.description}</div>
      </div>
      <div className="content">
        <div className="title">{event.title}</div>
        <div className="description">{event.description}</div>
      </div>
      <div className="line" />
      <div className="point" />
    </Container>
  );
};
