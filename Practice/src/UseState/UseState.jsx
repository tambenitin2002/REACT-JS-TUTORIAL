
//! Use State introduction

// import React from "react";
// import { useState } from "react";

// const UseState=()=>{
//     const [init, setInit]=useState("kya Jspider hi Qspider hain? ")
//     return(
//         <div>
//             <h1>{init}</h1>
//             <button onClick={()=>setInit(" Yes, Qspider hi Jspider Hain")}>Check Answer</button>
//         </div>
//     )
// }

// export default UseState;

// import React from "react";
// import { useState } from "react";

// const UseState = () => {
//     const [init, setInit] = useState(2)
//     return(
//         <div>
//             <h1>{init}</h1>
//             <button onClick={()=>setInit(6)}>update</button>
//         </div>
//     )
// }
// export default UseState;

//! Using class base component usestate

// import React, { Component } from "react";

// export default class UseState extends Component{
//     constructor(){
//         super()
//         this.state={
//            init:2

//         }
//     }

//     render(){

//         return (
//            <div>
//             <h1>{this.state.init}</h1>
//             <button onClick={()=>this.setState({init:6})}>update</button>
//            </div>

//         )
//     }
// }

//! By using setState and using onclick write change value program

// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//     const[state, setState]=useState({
//         name:"Jspiders"
//     })
//     return(
//         <div>
//         <h1>{state.name}</h1>
//          <button onClick={()=>setState({name:"Qspiders"})}>change</button>
//         </div>
//     )
// }
// export default UseState;

//! By using different function and using onclick

// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//     const[state, setState]=useState(
//         {
//            count:0,
//         }
//     )

//     function increment(){
//         setState({count:state.count+1});
//     }

//     function decrement(){
//        setState({count:state.count-1})
//     }

//     function reset(){
//         setState({count:0})
//     }

//     return(
//         <div>
//             <h1>{state.count}</h1>
//             <button onClick={()=>increment()}>Increament</button>
//             <button onClick={()=>decrement()}>Decreament</button>
//             <button onClick={()=>reset()}>reset</button>
//         </div>
//     )
// }
// export default UseState;

//! Ternary operator use in useState
// import React from 'react';
// import { useState } from 'react';
// const UseState=()=>{
//     const [state, setState]=useState(true)
//     return(
//         <div>
//             <h1>{state?"I am true":"I am false"}</h1>
//             <button onClick={()=>setState(false)}>Change</button>
//         </div>
//     )

// }
// export default UseState;

//! Event Listners using useState
// import React from 'react';
// const UseState=()=>{
//     return(
//         <div>
//             <button onClick={()=>alert("Hello I am onClick!")}>Click for ONCLICK</button><br /><br />
//             <button onDoubleClick={()=>alert("Hello I am onDoubleClick!")}>Click for OnDoubleClick</button><br /><br />
//             <button onMouseOver={()=>alert("I am on MouseOver!")}>Click for onMouseOver</button><br /><br />
//             <button onMouseOut={()=>alert("Hello I Am Mouse out!")}>Click for On Mouse Out</button><br /><br />
//             <button onKeyUp={()=>alert("Hello I am On key up")}>up key</button><br /><br />
//             <button onKeyDown={()=>alert("I Am Key Down! ")}>Key board key down</button><br /> <br />
//         </div>
//     )
// }
// export default UseState;

// import React from "react";
// import { useState } from "react";
// const UseState = () => {
//   const [state, setState] = useState(false);
//   return (
//     <div>
//         {state & (
//         <div>
//           <p>Lorem ipsum dolor sit.</p>
//         </div>
//       )}
//       <button
//         onMouseOver={() => setState(true)}
//         onMouseOut={() => setState(false)}
//       >
//         Houre Here...
//       </button>
      
//     </div>
//   );
// };
// export default UseState;

//! Use UseState onClick Propagation

// import React from 'react'
// import {useState} from 'react'
// const UseState=()=>{
//   return(
//     <section
//        onClick={(e)=>{
//         e.stopPropagation();
//         console.log("Grant Parent");
        
//        }}>
//         Grand Parent
//         <div onClick={(e)=>{
//           e.stopPropagation();
//             console.log("Parent");
            
//         }}>
//           parent 
//           <button
//           onClick={(e)=>{
//             e.stopPropagation();
//           console.log("Child");
          
//           }}>
//             Child
//           </button>
//         </div>
//        </section>
//   )
// }
// export default UseState;

//! Using Use State onClickCapture Propogation

// import React from  'react'
// import {useState} from 'react'

// const UseState=()=>{
//   return(
//     <section 
//     onClickCapture={
//       (e)=>{
//         e.stopPropagation();
//         console.log("Grand Parent");
        
//       }
//     }>
//       Grand Parent
//       <div onClickCapture={(e)=>{
//        e.stopPropagation();
//         console.log("Parent");
        
//       }}>
//         parent
//         <button onClickCapture={(e)=>{
//          /e.stopPropagation();
//           console.log("Child");
          
//         }}>
//           Child
//         </button>
//       </div>
//     </section>
//   )
// }
// export default UseState;


// It's a triky login logout
import React, { useState } from 'react';

const UseState = () => {
  const [isLoged, setIsLoged] = useState(false);

  if (isLoged) {
    return (
      
      <header>
        <div id="right">
          <div class="home-left">
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="home-right">
            <button onClick={() => setIsLoged(false)}>Log Out</button>
          </div>
        </div>
      </header>
    );
  } else {
    return (

<header>
        <div id="left">
          <button onClick={() => setIsLoged(true)}>Log in</button>
        </div>
      </header>

      
    );
  }
};

export default UseState;
























