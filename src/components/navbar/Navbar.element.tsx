import React, { useState } from "react";
import { Section } from "../../globalComponents";
import SocialLinks from "../../globalComponents/socialLinks";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Container,
  Name,
  NavLinks,
  NavLink,
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
          <SocialLinks />
        </Sidebar>
      </Container>
    </Section>
  );
};
