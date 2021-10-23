import React from "react";
import { Section } from "../../globalComponents";
import SocialLinks from "../../globalComponents/socialLinks";
import { Container, Divider } from "./footer.style";

export const Footer: React.FC<{}> = () => (
  <Container>
    <Section>
      <Divider />
      <div className="footer-content">
        <div className="footer-text">
          Learning new things one project at a time!
        </div>
        <div className="footer-text">contact@milanmeurrens.com</div>
        <SocialLinks />
      </div>
    </Section>
  </Container>
);
