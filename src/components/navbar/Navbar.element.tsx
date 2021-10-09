import React from "react";
import { Section } from "../../globalComponents";
import {
  Container,
  Name,
  NavLinks,
  NavLink,
  SocialLinks,
  IconLink,
  Icon,
} from "./navbar.style";

export const Navbar: React.FC<{}> = () => (
  <Section>
    <Container>
      <Name>Milan Meurrens</Name>
      <NavLinks>
        <NavLink>Projects</NavLink>
        <NavLink>Technologies</NavLink>
        <NavLink>About</NavLink>
      </NavLinks>

      <SocialLinks>
        <IconLink href="https://google.com">
          <Icon src={"/icons/github.svg"} alt="GitHub" />
        </IconLink>
        <IconLink href="https://google.com">
          <Icon src={"/icons/linkedin.svg"} alt="LinkedIn" />
        </IconLink>
      </SocialLinks>
    </Container>
  </Section>
);
