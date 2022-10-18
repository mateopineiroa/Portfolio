import Image from "next/image"
import linkedin from "../public/contact/linkedin.png"
import wsp from "../public/contact/wsp.png"
import github from "../public/contact/github.png"
import mail from "../public/contact/mail.png"
import SeeMore from "./SeeMore"


const Contact = ({scrollIntro}) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div id="contact" className='flex flex-col w-screen min-h-screen justify-center'>
      <h3 className='self-center text-4xl mt-44'>Contact</h3>
      <div className="self-center grid grid-cols-2 md:grid-cols-4 w-full p-4 lg:w-1/2  mt-8 mb-24 gap-9">
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a className="self-center" href={"https://linkedin.com/in/mateopineiro"} target="_blank" rel="noreferrer">
            <Image alt="" src={linkedin} objectFit="contain" width={300} height={300} />
          </a>
        </div>
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a className="self-center" href={"https://github.com/mateopineiroa"} target="_blank" rel="noreferrer">
            <Image alt="" src={github} objectFit="contain" width={300} height={300} />
          </a>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <a className="self-center" href={"https://api.whatsapp.com/send?phone=59898557448&text=Estoy%20interesado/a%20en%20hablar"} target="_blank" rel="noreferrer">
            <Image alt="" src={wsp} objectFit="contain" width={300} height={300} />
          </a>
            <p onClick={() => copyToClipboard("+598 98 557 448")} className="text-center self-center hover:cursor-pointer text-xs">+598 98 557 448<span className="material-symbols-outlined text-xs scale-75">
            content_copy
            </span></p>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <a className="cursor-pointer self-center" href={"mailto:mateopineiro2001@gmail.com"} target="_blank" rel="noreferrer">
            <Image alt="" src={mail} objectFit="contain" width={300} height={300} />
          </a>
          <p className="hover:cursor-pointer text-center w-full text-xs" onClick={() => copyToClipboard("mateopineiro2001@gmail.com")}>Copy to Clipboard<span className="material-symbols-outlined text-xs scale-75">
          content_copy
          </span></p>
        </div>
      </div>
      <>
      <p onClick={scrollIntro} className={`absolute bottom-12 self-center  hover:cursor-pointer`}>Intro</p>
      <span onClick={scrollIntro} className={`material-symbols-outlined absolute bottom-6 self-center scale-150 hover:cursor-pointer`}>
        expand_less
      </span>
      </>
    </div>
  )
}

export default Contact
