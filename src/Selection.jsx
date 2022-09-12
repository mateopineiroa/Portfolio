import React from 'react'

const Selection = ({setSection}) => {
  return (
    <div className='button-container'>
      <button onClick={() => setSection("aboutMe")} class="button"><span class="top">About me</span></button>
      <button onClick={() => setSection("proyects")} class="button"><span class="top">My Proyects</span></button>
      <button onClick={() => setSection("contact")} class="button"><span class="top">Contact</span></button>


    </div>
  )
}

export default Selection
