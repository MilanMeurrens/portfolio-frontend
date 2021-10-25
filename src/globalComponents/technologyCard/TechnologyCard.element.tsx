import React from "react";
import { TechnologyGroup } from "../../types/types";
import { Container } from "./technologyCard.style";

type Props = {
  technologyGroup: TechnologyGroup;
};

export const TechnologyCard: React.FC<Props> = ({ technologyGroup }) => {
  return (
    <Container>
      <div className="background" />
      <div className="content">
        <img src={`icons/${technologyGroup.icon}`} alt="" className="" />
        <div className="title">{technologyGroup.title}</div>
        <div className="items">
          {technologyGroup.technologies.map((tech) => (
            <div className="item">
              <div className="bullet" />
              <span className="item">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
