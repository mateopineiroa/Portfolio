import Image from "next/image"
import me from "../public/me.png"
import { Text } from "@nextui-org/react"

const AboutMe = ({scrollSkills}) => {
  return (
    <>
      <div className="flex flex-col">

        <div id="aboutme" className="w-screen min-h-screen pb-14 flex flex-col md:flex-row align-middle justify-center">
          <div className="p-10 md:max-w-lg md:self-center">
            <h2 className=" text-4xl mb-4 mt-32">About Me</h2>

            <p className=" text-lg">{"I'm a Software Engineer student and a Web Developer."}<br/>
              {"Currently interested in being part of a team of developers and make challenging proyects. "}<br/>
              I consider myself
              as a problem-solver kind
              of person, proactive and a
              fast learner. I also think i am a
              really good teammate.</p>
          </div>
          <div className="self-center p-10">
            <Image src={me} alt="My picture" width={300} height={300} />
          </div>
        </div>
        <p onClick={scrollSkills} className={`relative bottom-20 self-center  hover:cursor-pointer`}>See more</p>
        <span onClick={scrollSkills} className={`material-symbols-outlined relative bottom-20 self-center scale-150 hover:cursor-pointer`}>
          expand_more
        </span>
      </div>
    </>
  )
}

export default AboutMe
