import React from 'react'
import {useEffect} from 'react'

const SeeMore = ({scrollTo, position}) => {
  useEffect(() => {
    console.log("dsd")
  }, [])
  return (
    <>
      <p onClick={scrollTo} className={`relative bottom-${position} self-center  hover:cursor-pointer`}>See more</p>
      <span onClick={scrollTo} className={`material-symbols-outlined relative bottom-${position} self-center scale-150 hover:cursor-pointer`}>
        expand_more
      </span>
{/*       <span className="material-symbols-outlined scale-150">
        expand_less
      </span> */}
      
    </>
  )
}

export default SeeMore
