import React from "react";
import Fleftaside from "./Fleftaside"
import Frightaside from "./Frightaside";
import Fmidaside from "./Fmidaside"


function Footer(){
    return(
    <div id="fcontainer">

       <div id="fleft">
            <Fleftaside/>
        </div>
        
      
      <div id="fmid">
          <Fmidaside/>
      </div>
      <div id="fright">
          <Frightaside/>
      </div>
      </div>
      
    )
}
export default Footer;