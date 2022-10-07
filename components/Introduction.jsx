
const Intro = ({ scrollAboutMe }) => {
  return (
    <div id="intro" className="px-10 h-screen w-screen flex relative -top-28 flex-col align-middle justify-center ">

        <h1 className=" text-4xl self-center">{"Hi! I'm"} <span className=" text-violet-700">Mateo</span></h1>

        <p className="text-lg self-center max-w-3xl mt-3 text-center ">{"I'm a Front-End Developer currently focused on building responsive front-end applications while learning back-end technologies."}</p>
      <div className="flex flex-col justify-center ">
        </div>

        <p onClick={scrollAboutMe} className="absolute bottom-6 self-center hover:cursor-pointer">See more</p>
        <span onClick={scrollAboutMe} className="material-symbols-outlined absolute -bottom-3 self-center scale-150 hover:cursor-pointer">
          expand_more
        </span>
      
    </div>
  )
}

export default Intro
