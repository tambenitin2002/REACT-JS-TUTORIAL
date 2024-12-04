import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="nav">
           <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           <NavLink to="/food">Food</NavLink>
           
           
    </div>
  )
}

export default NavBar