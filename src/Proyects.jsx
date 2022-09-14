import businessManager from "./assets/BusinessManager.png"
import pacientAdmin from "./assets/pacientAdmin.png"
import realState from "./assets/realState.png"

const Proyects = () => {


  return (
    
      <div class="proyects App">
          <h2>Some of my creations:</h2>
          <a target="_blank" href="https://symphonious-pavlova-924168.netlify.app/"><img class="proyect" src={businessManager} alt="proyect"/></a>
          <a target="_blank" href="https://meek-syrniki-76a53e.netlify.app/"><img class="proyect" src={pacientAdmin} alt=""/></a>
          <a target="_blank" href="https://inmobiliaria-pineiro.vercel.app/"><img class="proyect" src={realState} alt=""/></a>
      </div>
  )
}

export default Proyects