import React from "react";
import { Section } from "../../globalComponents";
import BackgroundAnimation from "../backgroundAnimation";
import { Container } from "./banner.style";

export const Banner: React.FC<{}> = () => (
  <Section>
    <Container>
      <div className="banner-left">
        <div className="animation">
          <BackgroundAnimation />
        </div>
        <div className="title-container">
          <span className="title">Welcome To My Personal </span>
          <span className="title">
            Portfolio
            <img src={"icons/purple-line.svg"} alt="line" className="line" />
          </span>
        </div>
        <div className="text">
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </div>
        <button className="btn-contact">Contact</button>
      </div>
    </Container>
  </Section>
);
