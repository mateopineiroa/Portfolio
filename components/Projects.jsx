import React from "react"
import businessManager from "../public/BusinessManager.png"
import realState from "../public/realState.png"
import pacientAdmin from "../public/pacientAdmin.png"
import portfolio from "../public/portfolio.png"
import ModalComponent from "./ModalComponent"


const Projects = ({scrollContact}) => {

  const Projects = [
    {
      title:"Portfolio",
      description: "NextJS app using tailwind and NextUI library for style.",
      github: "https://github.com/mateopineiroa/Portfolio",
      web: "https://portfolio-mateopineiroa.vercel.app/",
      technologies: ["NextJS", "JavaScript", "Tailwind", "NextUI", "HTML"],
      img: portfolio
    },
    {
      title: "Veterinary Patient Manager",
      description: "ReactJS app using tailwind for style. This project is the front-end of a web application to add and manage patients.",
      github: "https://github.com/mateopineiroa/React-Course",
      web:"https://poetic-biscuit-88f557.netlify.app",
      img: pacientAdmin
    },
    {
      title: "Business Manager",
      description: "ReactJS app using tailwind for style. The idea of the project is to make the assignment of tasks to employees as efficient as possible. (Project in process)",
      github: "https://github.com/mateopineiroa/Business-Manager",
      web:"https://symphonious-pavlova-924168.netlify.app/",
      img: businessManager
    },
    {
      title: "Real State Web",
      description: "JavaScript project with scss and bootstrap for style. Standard five sections web page for the company Inmobilaria Aguilera (Real State business).",
      github: "https://github.com/mateopineiroa/Inmobiliaria-Pineiro",
      web:"https://www.aguilerainmobiliaria.com/",
      img: realState
    }
  ]

  return (
    <div className="flex flex-col">

      <div id="projects" className='flex flex-col w-screen min-h-screen justify-center pb-12'>
        <h3 className='self-center text-4xl mt-40 sm:mt-32'>Projects</h3>
        <div className='flex flex-col md:grid  p-10 md:grid-cols-3 md:grid-rows-2 md:gap-11 md:w-full xl:w-10/12 2xl:w-3/4 self-center'>

          { Projects && Projects.map( (project) => {
            return (
              <ModalComponent 
              key={project.title}
              title={project.title}
              description={project.description}
              github={project.github}
              web={project.web}
              technologies={project.technologies}
              img={project.img} />
              )
            })}


        </div>
      </div>
      <p onClick={scrollContact} className={`relative bottom-20 self-center  hover:cursor-pointer`}>See more</p>
      <span onClick={scrollContact} className={`material-symbols-outlined relative bottom-20 self-center scale-150 hover:cursor-pointer`}>
        expand_more
      </span>
    </div>
  )
}

export default Projects
