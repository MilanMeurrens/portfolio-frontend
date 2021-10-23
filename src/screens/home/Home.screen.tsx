import React from "react";
import Banner from "../../components/banner";
import ProjectsSection from "../../components/projects";
import Divider from "../../globalComponents/divider";

export const Home = () => {
  return (
    <>
      <Banner />
      <Divider />
      <ProjectsSection />
    </>
  );
};
