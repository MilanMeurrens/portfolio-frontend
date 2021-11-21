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
    title: "Building a solar car",
    date: "October 2017",
    description: `After one and a half year of non-stop working, we finished third in the world championship for solar cars. In this race, teams from all over the world race 3000km through the desert of Australia. This while solely relying on the energy of the sun.
    \n In this team, I was responsible for creating the electronics with its accompanying embedded software and a data-monitoring programm. This program tracked and visualized everything that was going on inside the car from a distance.`,
  },
  {
    id: "1",
    title: "Graduation",
    date: "June 2018",
    description: `One bachelor's, master's, and postgraduate degree later, I was ready to enter the world of work.`,
  },
  {
    id: "2",
    title: "✓ I'm not a robot",
    date: "August 2018 – January 2021",
    description: `Deciding to combine my knowledge of electronics and software engineering, I joined a robotics company. The obvious choice was to start in embedded software, but I quickly moved around to help where needed.
      \nIn my 2.5 years there, I've gained experience with all software related parts of a robot including complex state machines, path finding, robot vision and many more.`,
  },
  {
    id: "2",
    title: "I'm not a consultant",
    date: "August 2018 – January 2021",
    description: `Deciding to combine my knowledge of electronics and software engineering, I joined a robotics company. The obvious choice was to start in embedded software, but I quickly moved around to help where needed.
      \nIn my 2.5 years there, I've gained experience with all software related parts of a robot including complex state machines, path finding, robot vision and many more.`,
  },
];
