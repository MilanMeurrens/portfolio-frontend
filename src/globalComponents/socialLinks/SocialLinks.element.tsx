import React from "react";
import { Container, IconLink, Icon } from "./socialLinks.style";

export const SocialLinks: React.FC<{}> = () => {
  return (
    <Container>
      <IconLink href="https://github.com/MilanMeurrens" target="_blank">
        <Icon src={"/icons/github.svg"} alt="GitHub" />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/milanmeurrens/"
        target="_blank"
      >
        <Icon src={"/icons/linkedin.svg"} alt="LinkedIn" />
      </IconLink>
    </Container>
  );
};
