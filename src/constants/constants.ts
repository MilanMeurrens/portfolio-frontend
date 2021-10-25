import { Project, TechnologyGroup, TimelineEvent } from "../types/types";

export const projects: Array<Project> = [
  {
    title: "MERN Memories",
    description_short:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    header_img: "/images/image1.png",
    tags: ["Mongo", "Express", "React", "Node"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "0",
  },
  {
    title: "E-Commerce",
    description_short:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    header_img: "/images/image2.png",
    tags: ["React", "JavaScript"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "1",
  },
  {
    title: "WebRTC App",
    description_short:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    header_img: "/images/image1.png",
    tags: ["React", "WebRTC"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "2",
  },
  {
    title: "Unichat",
    description_short:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    header_img: "/images/image2.png",
    tags: ["React", "ChatEngine", "Firebase"],
    source_code_url: "https://google.com",
    visit_url: "https://google.com",
    id: "3",
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
