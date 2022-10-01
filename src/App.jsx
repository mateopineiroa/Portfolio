import { useState } from 'react'
import Proyects from './Proyects'
import Background from './Background'
import Selection from './Selection'
import Contact from './Contact'
import AboutMe from './AboutMe'
import './App.css'

function App() {
  const [section, setSection] = useState("aboutMe")

  return (
    <>
      <Background />
      <div className="App">
        <Selection setSection={setSection}/>  
        {
          section == "proyects" ?                             /* Operador ternario quizas(? */
          <Proyects /> : section == "aboutMe" ? <AboutMe /> : <Contact /> 
        }
      </div>
    </>
  )
}

export default App
