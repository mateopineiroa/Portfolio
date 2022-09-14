import React from 'react'
import me from "./assets/pic.png"

const AboutMe = () => {
  return (
    <div>
      <header>
          <div>
            <h1>Mateo Piñeiro</h1>
            <p>Chamuyo del bueno</p>
          </div>
          <img src={me} alt="Dev's img"/>
        </header>
    </div>
  )
}

export default AboutMe
