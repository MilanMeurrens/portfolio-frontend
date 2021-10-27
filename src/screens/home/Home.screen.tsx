import React from "react";
import AboutMeSection from "../../components/aboutMeSection";
import Banner from "../../components/banner";
import ProjectsSection from "../../components/projectsSection";
import TechnologiesSection from "../../components/technologiesSection";
import Divider from "../../globalComponents/divider";

export const Home = () => {
  return (
    <>
      <Banner />
      <Divider />
      <ProjectsSection />
      <Divider />
      <TechnologiesSection />
      <Divider />
      <AboutMeSection />
    </>
  );
};
