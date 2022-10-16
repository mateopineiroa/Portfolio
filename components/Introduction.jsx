import SeeMore from "./SeeMore"
import { Text } from "@nextui-org/react"


const Intro = ({ scrollAboutMe }) => {
  return (
    <div className="flex flex-col">

      <div id="intro" className="px-10 min-h-screen w-screen flex relative -top-28 flex-col align-middle justify-center ">

        <div className="self-center">
          <Text b size={40} css={{display: "inline"}}>{"Hi! I'm "}</Text>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $blue800 -20%, $blue400 100%",
              display: "inline"
            }}
            weight="bold"
            >
            Mateo
          </Text>
        </div>
          
        <Text h4 css={{alignSelf:"center", textAlign: "center"}}>{"I'm a Front-End Developer currently focused on building responsive front-end applications while learning back-end technologies."}</Text>
          
        {/* <p onClick={scrollAboutMe} className="absolute bottom-6 self-center hover:cursor-pointer">See more</p>
        <span onClick={scrollAboutMe} className="material-symbols-outlined absolute -bottom-3 self-center scale-150 hover:cursor-pointer">
        expand_more
      </span> */}

      </div>
      <SeeMore scrollTo={scrollAboutMe} position={36} />
    </div>
  )
}

export default Intro
