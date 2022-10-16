import Image from "next/image"
import linkedin from "../public/contact/linkedin.png"
import wsp from "../public/contact/wsp.png"
import github from "../public/contact/github.png"
import mail from "../public/contact/mail.png"
import SeeMore from "./SeeMore"


const Contact = ({scrollIntro}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("mateopineiro2001@gmail.com");
  }
  return (
    <div id="contact" className='flex flex-col w-screen min-h-screen justify-center'>
      <h3 className='self-center text-4xl mt-44'>Contact</h3>
      <div className="self-center grid grid-cols-2 md:grid-cols-4 w-full p-4 lg:w-1/2 2xl:w-1/3 mt-8 mb-24 gap-9">
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a href={"https://linkedin.com/in/mateopineiro"} target="_blank" rel="noreferrer">
            <Image alt="" src={linkedin} objectFit="contain" width={300} height={300} />
          </a>
        </div>
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a href={"https://github.com/mateopineiroa"} target="_blank" rel="noreferrer">
            <Image alt="" src={github} objectFit="contain" width={300} height={300} />
          </a>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <a href={"https://api.whatsapp.com/send?phone=59898557448&text=Estoy%20interesado/a%20en%20hablar"} target="_blank" rel="noreferrer">
            <Image alt="" src={wsp} objectFit="contain" width={300} height={300} />
          </a>
            <p className="text-center ">+598 98 557 448</p>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <a className="cursor-pointer" href={"mailto:mateopineiro2001@gmail.com"} target="_blank" rel="noreferrer">
            <Image alt="" src={mail} objectFit="contain" width={300} height={300} />
          </a>
          {/* <p className="w-full text-center">mateopineiro2001@gmail.com</p> */}
          <button className=" text-center w-full" onClick={copyToClipboard}>Copy to clipboard</button>
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
