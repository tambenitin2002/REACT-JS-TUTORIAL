import React from 'react'
import LeftNav from './LeftNav'
import MidNav from './MidNav'
import RightNav from './RightNav'

const NavBar = () => {
  return (
    <div className='nav d-flex align-items-center justify-content-evenly text-align-center w-100 text-white position-fixed' style={{ height: 100, backgroundColor: '#16423C', top: 0, left: 0, zIndex: 1000 }}>
     <div id="leftnav" >
           <LeftNav/>
        </div>
        <div id="midnav" className='color-white'>
          <MidNav/>
        </div>
        <div id="rightnav" className='color-white'>
          <RightNav/>
        </div>
    </div>
    
  )
}

export default NavBar