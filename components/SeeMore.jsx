import React from 'react'

const SeeMore = ({scrollTo, position}) => {
  return (
    <>
      <p onClick={scrollTo} className={`relative bottom-${position} self-center  hover:cursor-pointer`}>See more</p>
      <span onClick={scrollTo} className={`material-symbols-outlined relative bottom-${position} self-center scale-150 hover:cursor-pointer`}>
        expand_more
      </span>
      
    </>
  )
}

export default SeeMore
