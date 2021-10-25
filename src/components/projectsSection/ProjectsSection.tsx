import React from "react";
import { Section } from "../../globalComponents";
import ProjectCard from "../../globalComponents/projectCard";
import SectionHeader from "../../globalComponents/sectionHeader";
import { Container } from "./projectsSection.style";
import { projects } from "../../constants/constants";
import { Project } from "../../types/types";

export const ProjectsSection: React.FC<{}> = () => (
  <Section>
    <Container>
      <SectionHeader
        title={"Projects"}
        text={
          "Tesxt afd hfdh fh f  fjdo jdfdf vbsohf gh vnkfhbih uwhvv bkdhkfh knvb dfhj, fdfj df fdkhf fhdhf."
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
