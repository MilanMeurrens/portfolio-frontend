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
          Hello, my name is Milan Meurrens. I'm a software engineer with a
          background in electronics. Technology and science are my interests but
          making things from scratch is my passion!
        </div>
        <a href="#contact">
          <button className="btn-contact">Contact</button>
        </a>
      </div>
    </Container>
  </Section>
);
