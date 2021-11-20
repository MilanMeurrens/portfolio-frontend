import React, { useEffect, useState } from "react";
import { Section } from "../../globalComponents";
import SocialLinks from "../../globalComponents/socialLinks";
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
  const [sidebarHidden, setSidebarHidden] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 150
    );
    setPrevScrollPos(currentScrollPos);

    setTransparent(currentScrollPos < 70);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    // <Section>

    <Container data-visible={visible} data-transparent={transparent}>
      <div className="content">
        <Name>Milan Meurrens</Name>
        <OpenButton onClick={() => setSidebarHidden(false)}>
          <OpenIcon src={"/icons/hamburger.svg"} alt="Open" />
        </OpenButton>
        <Sidebar data-hidden={sidebarHidden}>
          <CloseButton onClick={() => setSidebarHidden(true)}>
            <CloseIcon src={"/icons/close.svg"} alt="Close" />
          </CloseButton>
          <NavLinks>
            <NavLink href="#projects" onClick={() => setSidebarHidden(true)}>
              Projects
            </NavLink>
            <NavLink
              href="#technologies"
              onClick={() => setSidebarHidden(true)}
            >
              Technologies
            </NavLink>
            <NavLink href="#about" onClick={() => setSidebarHidden(true)}>
              About
            </NavLink>
          </NavLinks>
          <SocialLinks />
        </Sidebar>
      </div>
    </Container>
    // </Section>
  );
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
