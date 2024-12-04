import React from 'react'

const MidNav = () => {
  return (
    <div className='d-flex align-items-center justify-content-evenly w-500'>
        <p className='search-icon d-flex align-items-center pt-3  text-align-center  justify-content-evenly'><i class="fa-solid fa-magnifying-glass"></i></p>
        <input type="text" placeholder='search ?' className='input rounded-2 pl-5' />
    </div>
  )
}

export default MidNav