import React from 'react'
import { NavLink } from 'react-router-dom'

const Rfooter = () => {
  return (
    <div>
        <h1>Right Footer</h1>
        <div id="footer">
           <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           <NavLink to="/food">Food</NavLink>
        </div>
           
    </div>
  )
}

export default Rfooter