import React, { forwardRef } from "react";
import businessManager from "../public/BusinessManager.png";
import realState from "../public/realState.png";
import pacientAdmin from "../public/pacientAdmin.png";
import portfolio from "../public/portfolio.png";
import ModalComponent from "./ModalComponent";

const ProjectsData = [
  {
    title: "Portfolio",
    description: "NextJS app using tailwind and NextUI library for style.",
    github: "https://github.com/mateopineiroa/Portfolio",
    web: "https://portfolio-mateopineiroa.vercel.app/",
    technologies: ["NextJS", "JavaScript", "Tailwind", "NextUI", "HTML"],
    img: portfolio,
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
        className="flex min-h-screen w-screen flex-col justify-center pb-12"
      >
        <h3 className="mt-40 self-center text-4xl sm:mt-32">Projects</h3>
        <div className="flex flex-col self-center  p-10 md:grid md:w-full md:grid-cols-3 md:grid-rows-2 md:gap-11 xl:w-10/12 2xl:w-3/4">
          {ProjectsData.map((project) => {
            return (
              <ModalComponent
                key={project.title}
                title={project.title}
                description={project.description}
                github={project.github}
                web={project.web}
                technologies={project.technologies}
                img={project.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
