import React from "react";
import { Container, IconLink, Icon } from "./socialLinks.style";

export const SocialLinks: React.FC<{}> = () => {
  return (
    <Container>
      <IconLink href="https://google.com">
        <Icon src={"/icons/github.svg"} alt="GitHub" />
      </IconLink>
      <IconLink href="https://google.com">
        <Icon src={"/icons/linkedin.svg"} alt="LinkedIn" />
      </IconLink>
    </Container>
  );
};
