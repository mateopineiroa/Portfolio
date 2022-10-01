import React from 'react'
import gitHub from "./assets/github.png"
import mail from "./assets/mail.png"
import wsp from "./assets/wsp.png"
import linkedin from "./assets/linkedin.png"

const Contact = () => {
  const wspLink = "https://api.whatsapp.com/send?phone=59898557448&text=Estoy%20interesado/a%20en%20hablar"
  return (
    <div>
      <h1 className='contact-title'>Contact me</h1>
      <div className='contact-container'>
        <div className="contact-card">
          <div className="contact-img">
            <img id="wspImg" src={wsp} alt="WhatsApp Img" />
          </div>
          <a target={"_blank"} href={wspLink}>Link a wsp web</a>
        </div>
        <div className="contact-card">
          <div className="contact-img">
            <img src={linkedin} alt="Linkedin Img" />
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-img">
            <img src={mail} alt="Mail Img" />
          </div>
          <a href="mailto:john@example.com">mateopineiro2001@gmail.com</a>
        </div>
        <div className="contact-card">
          <div className="contact-img">
            <a target={"_blank"} href="https://github.com/mateopineiroa"><img src={gitHub} alt="github Img" /></a>
          </div>
        </div>
        
        {/* Form and handle form(?) */}
      </div>
    </div>
  )
}

export default Contact
