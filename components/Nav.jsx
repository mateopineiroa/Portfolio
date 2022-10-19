

const Nav = ({ scrollAboutMe, scrollIntro, scrollSkills, scrollProjects, scrollContact }) => {
  
  return (
    <div className='flex justify-end sticky z-50 top-0 bg-gray-100  pr-5 '>

      <div className="">
        <button  className='hover:text-gray-500 transition-all ease my-3 p-3 text-xs sm:text-base font-bold text-gray-900' onClick={scrollIntro}>Intro</button>
        <button  className='hover:text-gray-500 transition-all ease my-3 p-3 text-xs sm:text-base font-bold text-gray-900' onClick={scrollAboutMe}>About Me</button>
        <button  className='hover:text-gray-500 transition-all ease my-3 p-3 text-xs sm:text-base font-bold text-gray-900' onClick={scrollSkills}>Skills</button>
        <button  className='hover:text-gray-500 transition-all ease my-3 p-3 text-xs sm:text-base font-bold text-gray-900' onClick={scrollProjects}>Projects</button>
        <button  className='hover:text-gray-500 transition-all ease my-3 p-3 text-xs sm:text-base font-bold text-gray-900' onClick={scrollContact}>Contact</button>
      </div>
    </div>
  )
}

export default Nav
