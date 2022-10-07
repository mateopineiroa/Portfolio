

const Nav = ({ scrollAboutMe, scrollIntro, scrollSkills, scrollProjects, scrollContact }) => {
  
  return (
    <div className='flex justify-end sticky z-50 top-0 border-b bg-gray-900 border-gray-700 pr-5'>

      <div className="">
        <button className='hover:text-white my-3 p-3 font-bold text-gray-400' onClick={scrollIntro}>Intro</button>
        <button className='hover:text-white my-3 p-3 font-bold text-gray-400' onClick={scrollAboutMe}>About Me</button>
        <button className='hover:text-white my-3 p-3 font-bold text-gray-400' onClick={scrollSkills}>Skills</button>
        <button className='hover:text-white my-3 p-3 font-bold text-gray-400' onClick={scrollProjects}>Projects</button>
        <button className='hover:text-white my-3 p-3 font-bold text-gray-400' onClick={scrollContact}>Contact</button>
      </div>
    </div>
  )
}

export default Nav
