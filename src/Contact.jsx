import React from 'react'
import gitHub from "./assets/github.png"

const Contact = () => {
  return (
    <div>
      
      <p><a href="mailto:john@example.com"><span class="material-symbols-outlined">mail</span>mateopineiro2001@gmail.com</a></p>
      <p><a target={"_blank"} href="https://github.com/mateopineiroa"><img src={gitHub} alt="github Img" /></a></p>
      {/* Form and handle form(?) */}
    </div>
  )
}

export default Contact
