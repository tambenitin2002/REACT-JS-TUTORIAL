import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
        <div id='nav'>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>  */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
        </div>
    )
}
export default NavBar