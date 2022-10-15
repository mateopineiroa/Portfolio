import Image from "next/image"
import Link from "next/link"
import businessManager from "../public/BusinessManager.png"
import realState from "../public/realState.png"
import pacientAdmin from "../public/pacientAdmin.png"
import portfolio from "../public/portfolio.png"

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col w-screen min-h-screen justify-center'>
      <h3 className='self-center text-4xl'>Proyects</h3>
      <div className='flex flex-col md:grid  p-10 md:grid-cols-3 md:grid-rows-2 gap-4 md:w-full self-center'>
        <a className="mx-auto" href="https://portfolio-mateopineiroa.vercel.app/" target="_blank" rel="noreferrer" >
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
        </a>
        
      </div>
    </div>
  )
}

export default Projects
