import React from 'react'
import gitHub from "./assets/github.png"
import mail from "./assets/mail.webp"

const Contact = () => {
  const wspLink = "https://api.whatsapp.com/send?phone=59898557448&text=Estoy%20interesado/a%20en%20hablar"
  return (
    <div>
      <h1 className='contact-title'>Contact me</h1>
      <div className='contact-container'>
        <div className="contact-card">
          <img src="" alt="WhatsApp Img" />
          <a target={"_blank"} href={wspLink}>Link a wsp web</a>
        </div>
        <div className="contact-card">
          <img src="" alt="Linkedin Img" />
        </div>
        <div className="contact-card">
          <a href="mailto:john@example.com">mateopineiro2001@gmail.com</a>
          <img src={mail} alt="Mail Img" />
        </div>
        <div className="contact-card">
          <a target={"_blank"} href="https://github.com/mateopineiroa"><img src={gitHub} alt="github Img" /></a>
        </div>
        
        {/* Form and handle form(?) */}
      </div>
    </div>
  )
}

export default Contact
