import React from "react";
import Logo from "/tata-logo-1.svg"
import { IoIosSearch } from "react-icons/io";

const Frightaside =()=>{
    return(
        <nav id='fmenubar'>
            <div><a href="">CONTACT US</a></div>
            <div><a href="">TCS WORLDWILD</a></div>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
            <div><img src={Logo}/></div>
            {/* <IoIosSearch /> */}
        </nav>
    )
}
export default Frightaside;