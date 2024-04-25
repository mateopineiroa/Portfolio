import React, { forwardRef } from "react";
import businessManager from "../public/BusinessManager.png";
import realState from "../public/realState.png";
import pacientAdmin from "../public/pacientAdmin.png";
import portfolio from "../public/portfolio.png";
import twitterClone from "../public/twitterClone.png";
import chatApp from "../public/chatApp.png";
import WIP from "../public/WIP.webp";
import ModalComponent from "./ModalComponent";

const ProjectsData = [
  {
    title: "Access Control For Business - Secret Name",
    description:
      <><b>Access Control For Business - The biggest project yet</b><br/> It handles authentication and authorization depending on the role of the user.</>,
    github: "",
    web: "",
    technologies: [
      "NextJS",
      "NodeJS",
      "MongoDB",
      "NextAuth.js",
      "v0",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "radix",
    ],
    img: WIP,
  },
  {
    title: "Portfolio",
    description:
      "NextJS app using JavaScript, Vercel AI SDK, Tailwind and the NextUI components library.",
    github: "https://github.com/mateopineiroa/Portfolio",
    web: "https://portfolio-mateopineiroa.vercel.app/",
    technologies: [
      "NextJS",
      "JavaScript",
      "Tailwind",
      "NextUI",
      "Vercel AI SDK",
    ],
    img: portfolio,
  },
  {
    title: "Twitter Clone",
    description:
      "NextJS app using TypeScript, Supabase and Tailwind for styles.",
    github: "https://github.com/mateopineiroa/twitter-x",
    web: "https://twitter-x-zeta.vercel.app/",
    technologies: ["NextJS", "TypeScript", "Tailwind"],
    img: twitterClone,
  },
  {
    title: "Chat App",
    description:
      "NextJS app using TypeScript, Node.js for the backend, MongoDB, Mongoose, Socket.io and Tailwind for styles.",
    github: "https://github.com/mateopineiroa/node-consumer",
    web: "https://node-consumer.vercel.app/",
    technologies: ["NextJS", "TypeScript", "Tailwind", "MongoDB", "Socket.io"],
    img: chatApp,
  },
  {
    title: "Veterinary Patient Manager",
    description:
      "ReactJS app using tailwind for style. This project is the front-end of a web application to add and manage patients.",
    github: "https://github.com/mateopineiroa/React-Course",
    web: "https://poetic-biscuit-88f557.netlify.app",
    img: pacientAdmin,
  },
  {
    title: "Business Manager",
    description:
      "ReactJS app using tailwind for style. The idea of the project is to make the assignment of tasks to employees as efficient as possible. (Project in process)",
    github: "https://github.com/mateopineiroa/Business-Manager",
    web: "https://symphonious-pavlova-924168.netlify.app/",
    img: businessManager,
  },
  {
    title: "Real State Web",
    description:
      "JavaScript project with scss and bootstrap for style. Standard five sections web page for the company Inmobilaria Aguilera (Real State business).",
    github: "https://github.com/mateopineiroa/Inmobiliaria-Pineiro",
    web: "https://www.aguilerainmobiliaria.com/",
    img: realState,
  },
];

const Projects = forwardRef(({ scrollContact }, ref) => {
  return (
    <section className="flex flex-col">
      <div
        ref={ref}
        id="projects"
        className="flex min-h-screen w-screen flex-col justify-center"
      >
        <h2 className="inline self-center bg-gradient-to-b from-zinc-800 to-zinc-300 bg-clip-text text-3xl font-bold  text-transparent selection:text-zinc-800">
          Personal Projects
        </h2>

        <div className="flex flex-col items-center self-center p-10 md:grid md:w-full md:grid-cols-3 md:grid-rows-2 md:gap-11 xl:w-10/12 2xl:w-3/4">
          {ProjectsData.map(
            ({
              title,
              description,
              web,
              github,
              img,
              technologies,
              disabled,
            }) => {
              return (
                <ModalComponent
                  key={title}
                  title={title}
                  description={description}
                  github={github}
                  web={web}
                  technologies={technologies}
                  img={img}
                  disabled={disabled}
                />
              );
            },
          )}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
