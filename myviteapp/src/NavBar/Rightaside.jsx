import React from "react";
import Logo from "/tata-logo-1.svg"

const Rightaside =()=>{
    return(
        <nav id='menubar'>
            <div><a href="">CONTACT US</a></div>
            <div><a href="">TCS WORLDWILD</a></div>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
            <div><img src={Logo}/></div>
        </nav>
    )
}
export default Rightaside;