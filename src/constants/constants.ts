import { Project, TechnologyGroup, TimelineEvent } from "../types/types";

export const projects: Array<Project> = [
  {
    title: "Portfolio Website",
    description_short:
      "Responsive website entirely build from scratch using React to complement my resume. This site shows some more details about myself and all the side-projects I've worked on.",
    header_img: "/images/portfolio.png",
    tags: ["React", "TypeScript", "HTML", "CSS"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "0",
  },
  {
    title: "Shopping List App",
    description_short:
      "Full-stack Android app to simplify creating your weekly shopping list. You can add multiple dishes to your cart and automatically generate a shopping list from them. When not sure what to make, just add a random dish.",
    header_img: "/images/flutter.png",
    tags: ["Dart", "Flutter", "Python", "Django", "Google Firebase"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "1",
  },
  {
    title: "FindMyMaker",
    description_short:
      "Full-stack web app for people who need something 3D-printed, laser cutted or similar. It connects them to DIY hobbyists who have these machines. A profile displays somebody's available machines and materials.",
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
    \n In this team, I was responsible for creating the electronics with its accompanying embedded software and a data-monitoring program. The program tracked and visualized everything that was going on inside the car from a distance.`,
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
      \nIn the 2.5 years there, I've gained experience with all software related parts of a robot. This includus complex state machines, path finding, robot vision and much more.`,
  },
  {
    id: "3",
    title: "Consultancy is not for me",
    date: "January 2021 –  June 2021",
    description: `Having worked as a Python consultant for half a year, I can now definitely say consultancy is not for me. I want to be an actual part of a company, working towards a common goal with a motivated team.
      \nAs a consultant, I never found the connection to the company and product that I'm looking for. Feeling disposable, just a number, drained me. I decided to move on quickly. `,
  },
  {
    id: "4",
    title: "Startups are fun",
    date: "June 2021 – Now",
    description: `Stumbling across CityLegends online, it was an instant match. Building a full-stack application from scratch while also brainstorming about the features, UX/UI design, marketing etc. was exactly what I was looking for.
      \nFor now, we are a small team trying to create something that gives value to the urban sporters community. I'm excited to see what the future holds!`,
  },
];
