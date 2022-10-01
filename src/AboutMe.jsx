import React from 'react'
import me from "./assets/pic.png"
import cv from "./assets/cv.pdf"

const AboutMe = () => {
  return (
    <div>
      <header>
          <div>
            <h1>Mateo Piñeiro</h1>
            <p>Software engineer student and web developer. With interest in being part of a team of developers and make challenging proyects. I consider myself as a problem-solver kind of person, proactive and a fast learner. I try to be as good teammate as possible.</p>
          </div>
          <div>
            <a className='curriculum-link' href={cv} download>
              <img src={me} alt="curriculum downloader"/>
            </a>
            <span>Click my picture to download my curriculum!</span>
          </div>

        </header>
    </div>
  )
}

export default AboutMe
