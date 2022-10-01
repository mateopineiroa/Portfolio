import React from 'react'

const Selection = ({setSection}) => {
  return (
    <div className='button-container'>
      <button onClick={() => setSection("aboutMe")} className="button"><span className="top">About me</span></button>
      <button onClick={() => setSection("proyects")} className="button"><span className="top">My Proyects</span></button>
      <button onClick={() => setSection("contact")} className="button"><span className="top">Contact</span></button>
      

    </div>
  )
}

export default Selection
