import React from 'react'
import { NavLink } from 'react-router-dom'

const RightNav = () => {
  return (
    <div className='auth d-flex align-items-center justify-content-evenly text-align-center ' style={{width:600,height:50}}>
       <NavLink to={'/'} className='text-decoration-none  text-white fs-3'>Home</NavLink>
       <NavLink to={'/food'} className='text-decoration-none  text-white fs-3'>Food</NavLink>
       <NavLink to={'/contact'} className='text-decoration-none  text-white fs-3'>Contact</NavLink>
       <NavLink to={'/login'} className='text-decoration-none  text-white fs-3'>Login</NavLink>
       <NavLink to={'/signup'} className='text-decoration-none  text-white fs-3'>Signup</NavLink>
    </div>
  )
}

export default RightNav
