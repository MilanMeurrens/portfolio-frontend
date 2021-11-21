import { Project, TechnologyGroup, TimelineEvent } from "../types/types";

export const projects: Array<Project> = [
  {
    title: "Portfolio Website",
    description_short:
      "A responsive website entirely build from scratch using React to complement my resume. This site shows some more details about myself and all the side-projects I've worked on.",
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
  {
    title: "FindMyMaker",
    description_short:
      "A full-stack web app for people who need something 3D-printed, laser cutted or similar. It connects them to DIY hobbyists who have these machines. An profile displays somebody's available machines and materials.",
    header_img: "/images/findmymaker.png",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
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
    technologies: ["TypeScript", "JavaScript", "Python", "C/C++", "Dart"],
  },
  {
    id: "1",
    title: "Front-End",
    icon: "screen.svg",
    technologies: ["Bootstrap", "React.js", "Flutter", "HTML", "CSS"],
  },
  {
    id: "2",
    title: "Back-End",
    icon: "database.svg",
    technologies: [
      "NoSQL Databases",
      "Google Firebase",
      "SQL Databases",
      "FastAPI",
      "Django",
    ],
  },
  {
    id: "3",
    title: "DevOps",
    icon: "gear.svg",
    technologies: ["Google Cloud", "Jenkins", "Docker", "AWS"],
  },
  {
    id: "4",
    title: "UI/UX",
    icon: "website.svg",
    technologies: ["Figma"],
  },
  {
    id: "5",
    title: "Other",
    icon: "dots.svg",
    technologies: [
      "Data Science",
      "Embedded Devices",
      "Electronics",
      "Robotics",
      "Linux",
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
