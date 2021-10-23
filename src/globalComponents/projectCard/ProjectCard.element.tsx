import React from "react";
import { Project } from "../../types/types";
import { Container } from "./projectCard.style";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Container>
      <img src={project.header_img} alt={project.title} />
      <div className="content">
        <div className="title">{project.title}</div>
        <div className="divider divider-blue" />
        <div className="description">{project.description_short}</div>
        <div className="divider divider-purple" />
        <div className="subtitle">Stack</div>
        <div className="tags">
          {project.tags.map((tag) => (
            <div className="tag-container">
              <div className="tag-background" />
              <div className="tag-text">{tag}</div>
            </div>
          ))}
        </div>
        <a href="#" className="details">
          See details
        </a>
      </div>
    </Container>
  );
};
