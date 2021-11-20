import React from "react";
import { Section } from "../../globalComponents";
import ProjectCard from "../../globalComponents/projectCard";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./projectsSection.style";
import { projects } from "../../constants/constants";
import { Project } from "../../types/types";

export const ProjectsSection: React.FC<{}> = () => (
  <Section id="projects">
    <Container>
      <SectionHeader
        title={"Projects"}
        text={
          "I keep myself busy at nights and weekends with some projects. These can be MVPs of product ideas or just me having some fun with a new framework or programming language."
        }
      />
      <div className="project-cards">
        {projects.map((project: Project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </Container>
  </Section>
);
