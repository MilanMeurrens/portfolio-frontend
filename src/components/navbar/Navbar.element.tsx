import React, { useState } from "react";
import { Section } from "../../globalComponents";
import { useWindowSize } from "../../hooks/useWindowSize";
import { darkTheme } from "../../styles/themes";
import {
  Container,
  Name,
  NavLinks,
  NavLink,
  SocialLinks,
  IconLink,
  Icon,
  Sidebar,
  CloseButton,
  CloseIcon,
  OpenButton,
  OpenIcon,
} from "./navbar.style";

export const Navbar: React.FC<{}> = () => {
  const { width } = useWindowSize();
  const [sidebarHidden, setSidebarHidden] = useState(true);

  return (
    <Section>
      <Container>
        <Name>Milan Meurrens</Name>
        <OpenButton onClick={() => setSidebarHidden(false)}>
          <OpenIcon src={"/icons/hamburger.svg"} alt="Open" />
        </OpenButton>
        <Sidebar data-hidden={sidebarHidden}>
          <CloseButton onClick={() => setSidebarHidden(true)}>
            <CloseIcon src={"/icons/close.svg"} alt="Close" />
          </CloseButton>
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
        </Sidebar>
      </Container>
    </Section>
  );
};
