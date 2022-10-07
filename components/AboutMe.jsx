import Image from "next/image"
import me from "../public/me.png"


const AboutMe = () => {
  return (
    <div id="aboutme" className="w-screen h-screen bg-dark flex flex-col md:flex-row align-middle justify-center">
      <div className="p-10 md:max-w-lg md:self-center">
        <h2 className=" text-4xl mb-4 ">About Me</h2>
        <p className="">I'm a Software Engineer student
          and a Web Developer.<br/>
          Currently i'm interested in being part of a
          team of developers and
          make challenging
          proyects. <br/>
          I consider myself
          as a problem-solver kind
          of person, proactive and a
          fast learner. I also think i am a
          really good teammate.</p>
      </div>
      <div className="self-center p-10">
        <Image src={me} width={300} height={300} />
      </div>
    </div>
  )
}

export default AboutMe
