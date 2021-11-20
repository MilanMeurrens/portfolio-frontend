import { Project, TechnologyGroup, TimelineEvent } from "../types/types";

export const projects: Array<Project> = [
  {
    title: "Portfolio Website",
    description_short:
      "A website entirely build from scratch using React to complement my resume. This site shows some more details about myself and all the side-projects I've worked on.",
    header_img: "/images/portfolio.png",
    tags: ["React", "TypeScript", "HTML", "CSS"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "0",
  },
  {
    title: "Shopping List App",
    description_short:
      "A full-stack Android app with the main goal to simplify creating your weekly shopping list. You can add multiple dishes to your cart and automatically generate a shopping list from this. When not sure what to make, just add a random dish.",
    header_img: "/images/flutter.png",
    tags: ["Dart", "Flutter", "Python", "Django", "Google Firebase"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "1",
  },
];

export const technologies: Array<TechnologyGroup> = [
  {
    id: "0",
    title: "Languages",
    icon: "html.svg",
    technologies: ["Python", "JavaScript", "TypeScript", "C/C++", "Dart"],
  },
  {
    id: "1",
    title: "Front-End",
    icon: "screen.svg",
    technologies: ["React.js", "Flutter", "HTML5", "CSS", "Sass", "Bootstrap"],
  },
  {
    id: "2",
    title: "Back-End",
    icon: "database.svg",
    technologies: [
      "dJANGO",
      "FastAPI",
      "Node.js",
      "Express.js",
      "SQL Databases",
      "NoSQL Databases",
    ],
  },
  {
    id: "3",
    title: "DevOps",
    icon: "gear.svg",
    technologies: ["Dockers", "Jenkins", "AWS", "Google Cloud"],
  },
  {
    id: "4",
    title: "UI/UX",
    icon: "website.svg",
    technologies: ["Experience with tools ike Figma"],
  },
  {
    id: "5",
    title: "Other",
    icon: "dots.svg",
    technologies: [
      "Electronics",
      "Embedded Devices",
      "Robotics",
      "Data Science",
    ],
  },
];

export const timelineEvents: Array<TimelineEvent> = [
  {
    id: "0",
    title: "The beginning",
    date: "Januari 2020",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  },
  {
    id: "1",
    title: "The middle",
    date: "March 2020",
    description: `This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application.
      This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application.
      This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application`,
  },
  {
    id: "2",
    title: "The end",
    date: "December 2020",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  },
];
