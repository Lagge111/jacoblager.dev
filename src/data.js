import CMIYC from "./assets/catchmeifyoucan-portfolio.png";
import C1 from "./assets/c1-cover-dark.png";
import Leisurely from "./assets/leisurely-cover.png";
import ChatAppCover from "./assets/a3-chatify-cover.png";
import SpotifyProfileCover from "./assets/spotify-profile-cover.png";

const skills = [
  "React",
  "Material UI",
  "Java",
  "JavaScript",
  "Tailwind",
  "Ada 95",
  "CSS",
  "Express.js",
  "SQL",
  "HTML",
  "C++",
  "VS Code",
  "C#",
  ".NET",
  "Git",
];

const projects = [
  {
    id: 1,
    title: "Spotify Profile",
    description:
      "A website that utilizes the Spotify API to display the user's Spotify profile data, such as top artists, top tracks, and recently played tracks. Allows the user to filter top artists and top tracks on different time intervals, such as this month or all time.",
    cover: SpotifyProfileCover,
    tech: ["React", "Tailwind", "Express.js", "Spotify API", "Heroku"],
    link: "https://github.com/Lagge111/spotify-profile",
  },
  {
    id: 2,
    title: "Only C1 Solution",
    description:
      "As a part of a university course, I, together with a project team of 30 students, collaborated to develop a front-end solution for a logistics system to keep track of hospital consumables for Region Östergötland, the major healthcare provider of the region.",
    cover: C1,
    tech: ["React", "Material UI", "OpenAPI"],
    link: "https://gitlab.liu.se/tddc88-2022/c1/company-1-project",
  },
  {
    id: 3,
    title: "Chatify",
    description:
      "Collaborated with Mattias Larsson to create a multi-user chat application with a full-stack implementation in C# and .NET. The application features a GUI built using WPF and stores chat logs using JSON files.",
    cover: ChatAppCover,
    tech: ["C#", ".NET"],
    link: "https://gitlab.liu.se/jacla554/tddd49_725g66",
  },
  {
    id: 4,
    title: "Catch Me If You Can",
    description:
      "Where my programming journey started. Arcade style game with a retro feel, based on the logic from Pac-Man, with multiple levels and increasing difficulty. Has different enemy types and various power-ups. Handles game saves locally to file. Co-created with Mattias Larsson.",
    cover: CMIYC,
    tech: ["Java", "JavaFX"],
    link: "https://gitlab.liu.se/jacla554/projektarbete",
  },
];

const miscProjects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "The website you're currently visiting. A personal website built to demonstrate my proficiency in front-end development, featuring examples of my work and skills.",
    link: "https://github.com/Lagge111/jacoblager.dev",
    skills: ["React", "Tailwind"],
  },
  {
    id: 2,
    title: "Leisurely",
    description:
      "A simple activity suggestion tool for when you're feeling indecisive. Has different categories of activities, and provides a link to learn more about each suggested activity. Built to experiment with open APIs.",
    link: "https://github.com/Lagge111/leisurely",
    skills: ["React", "Tailwind", "daisyUI", "BoredAPI"],
  },
  {
    id: 3,
    title: "C++ Lab Series",
    description:
      "Laboratory work from a university course in C++, including dynamic memory handling, inheritance, polymorphism and much more.",
    link: "https://gitlab.liu.se/jacla554/726g77",
    skills: ["C++", "STL"],
  },
  {
    id: 4,
    title: "Java Lab Series",
    description:
      "Laboratory work from a university course in Java, where the main focus was object-oriented programming.",
    skills: ["Java", "JavaFX"],
  },
  {
    id: 5,
    title: "Continuous Integration & Continuous Delivery",
    description:
      "Laboratory work from a university course in Software Engineering, where I experimented with CI/CD.",
    link: "https://gitlab.liu.se/jacla554/lab5",
    skills: ["YAML", "Docker"],
  },
  {
    id: 6,
    title: "The Next Big Thing",
    description:
      "Do you have an exciting idea that you want to realize? I'm always up for a challenge! Contact me below.",
    link: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository",
    skills: ["???"],
  },
];

export { skills, projects, miscProjects };
