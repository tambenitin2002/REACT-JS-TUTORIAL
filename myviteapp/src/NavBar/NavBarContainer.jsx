import React from 'react'
import Leftaside from './Leftaside'
import Rightaside from './Rightaside'
import Midaside from './Midaside'

const NavBarContainer = () =>{
    return(
        
    <div id="container">
        <div id="left">
            <Leftaside/>
        </div>
        
      
      <div id="search">
          <Midaside/>
      </div>
      <div id="right">
          <Rightaside/>
      </div>
      </div>
      
    )
}
export default NavBarContainer;