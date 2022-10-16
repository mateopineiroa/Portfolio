import React from "react"
import Image from "next/image"
import businessManager from "../public/BusinessManager.png"
import realState from "../public/realState.png"
import pacientAdmin from "../public/pacientAdmin.png"
import portfolio from "../public/portfolio.png"
import { Button } from "@nextui-org/react"
import ModalComponent from "./ModalComponent"

const Projects = () => {

  const Proyects = [
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
      description: "ReactJS app using tailwind for style. The idea of the project is to make the assignment of tasks to employees as efficient as possible.",
      github: "https://github.com/mateopineiroa/Business-Manager",
      web:"https://symphonious-pavlova-924168.netlify.app/",
      img: businessManager
    },
    {
      title: "Real State Web",
      description: "JavaScript proyect with scss and bootstrap for style. Standard five sections web page for real state business.",
      github: "https://github.com/mateopineiroa/Inmobiliaria-Pineiro",
      web:"https://inmobiliaria-pineiro.vercel.app/",
      img: realState
    }
  ]

  return (
    <div id="projects" className='flex flex-col w-screen min-h-screen justify-center'>
      <h3 className='self-center text-4xl'>Proyects</h3>
      <div className='flex flex-col md:grid  p-10 md:grid-cols-3 md:grid-rows-2 md:gap-11 md:w-full xl:w-10/12 2xl:w-3/4 self-center'>
        {/* <a className="mx-auto" href="https://portfolio-mateopineiroa.vercel.app/" target="_blank" rel="noreferrer" >
          <Image src={portfolio} alt="Proyect image"  objectFit="contain" width={300} height={300} />
        </a>
        <a className="mx-auto" href="https://poetic-biscuit-88f557.netlify.app" target="_blank" rel="noreferrer" >
          <Image src={pacientAdmin} alt="Proyect image" objectFit="contain" width={300} height={300} />
        </a>
        <a className="mx-auto" href="https://symphonious-pavlova-924168.netlify.app/" target="_blank" rel="noreferrer" >
          <Image src={businessManager} alt="Proyect image" objectFit="contain" width={300} height={300} />
        </a>
        <a className="mx-auto" href="https://inmobiliaria-pineiro.vercel.app/" target="_blank" rel="noreferrer" >
          <Image src={realState} alt="Proyect image"  objectFit="contain" width={300} height={300} />
        </a> */}
        
        

        
        { Proyects && Proyects.map( (proyect) => {
          return (
            <ModalComponent 
              key={proyect.title}
              title={proyect.title}
              description={proyect.description}
              github={proyect.github}
              web={proyect.web}
              technologies={proyect.technologies}
              img={proyect.img} />
          )
        })}
        









      </div>
    </div>
  )
}

export default Projects
