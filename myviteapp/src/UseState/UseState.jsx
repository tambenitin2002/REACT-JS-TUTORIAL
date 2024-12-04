   cp//! Use State introduction

// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//   const [init, setInit]=useState("Jspider")
//   return(
//     <div>
//       <h1>{init}</h1>
//       <button onClick={()=>setInit("Qspider")}>Update state</button>
//     </div>
//   )
// }
// export default UseState;



// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//   const [init, setInit]=useState(2)
//   return(
//     <div>
//       <h1>{init}</h1>
//       <button onClick={()=>setInit(6)}>Update state</button>
//     </div>
//   )
// }
// export default UseState;


//! Using class base component usestate

// import React, { Component } from 'react';


// export default class UseState extends Component{
//   constructor(){
//     super()
//     this.state=2
//   }

//   render(){

//   }
// }

//! By using setState and using onclick write counter program

// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//   const [state, setState]=useState({
//     name:"Jspiders"
//   })
//   return(
//     <div>
//       <h1>{state.name}</h1>
//       <button onClick={()=>setState({name:"Qspiders"})}>Change</button>
//     </div>
//   )
// }
// export default UseState;




//! By using Different functions and using onclick write counter program

// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//   const [state, setState]=useState({
//     count:0

    
//   }

// );

//  function increment(){
//   setState({
//         count:state.count+1
//         })
// }
// function decriment(){
//   setState({
//     count:state.count-1
//     })
// }
// function reset(){
//   setState({
//     count:0
//     })
// }
//   return(
    
//     <div>
//       <h1>{state.count}</h1>
//       {/* <button onClick={()=>setState({count:state.count+1})}>Increament</button>
//       <button onClick={()=>setState({count:state.count-1})}>Decreament</button>
//       <button onClick={()=>setState({count:0})}>Reset</button> */}

// <button onClick={()=>increment()}>Increament</button>
//       <button onClick={()=>decriment()}>Decreament</button>
//       <button onClick={()=>reset()}>Reset</button>
//     </div>
//   )
// }
// export default UseState;

//! Ternary operator use in states
// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//   const [state, setInit]=useState(true)
//   return(
//     <div>
//       <h1>{state?"I am true":"i am false"}</h1>
//       <button onClick={()=>setInit(false)}>Change</button>
      
//     </div>
//   )
// }
// export default UseState;

//! Event listners using  useState

// import React from 'react';

// const UseState=()=>{
 
//   return(
//     <div>
      
//       <button onClick={()=>alert("Hello I am onClick")}>Click</button>
//       <button onDoubleClick={()=>alert("Hello I am onDoubleClick")}>Click</button>
//       <button onMouseOver={()=>alert("Hello I am onMouseOver")}>Click</button>
//       <button onMouseOut={()=>alert("Hello I am onMouseOut")}>Click</button>
//       <button onKeyUp={()=>alert("Hello I am onKeyUp")}>Click</button>
//       <button onKeyDown={()=>alert("Hello I am onKeyDown")}>Click</button>
      
//     </div>
//   )
// }
// export default UseState;



// import React from 'react';
// import { useState } from 'react';

// const UseState=()=>{
//    const [state,setState]=useState(false)
//   return(
//     <div>
      
      
//       <button
//        onMouseOver={()=>setState(true)}
//        onMouseOut={()=>setState(false)}
//        >
//         Houre Here..
//        </button>
//        {state&&(
//         <div>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis natus sapiente alias nostrum cupiditate! Cumque dolor nisi tempore maiores culpa iure quis cum hic, neque amet non deserunt quae.</p>
//         </div>
//        )}
     
      
//     </div>
//   )
// }
// export default UseState;


//! Using UseState onClick Propagation
// import React from 'react';

// const UseState=()=>{
//   return(
//     <section
//     onClick={(e)=>{
//  e.stopPropagation();
//       console.log("Grand Parent");
      
//     }}>
//       Grand Parent
//       <div 
//        onClick={(e)=>{
//           e.stopPropagation();
//         console.log("Parent");
        
//       }}>
//         parent
//         <button
//         onClick={(e)=>{
 // e.stopPropagation();
//           console.log("Child");
          
//         }}>Child</button>
//       </div>
//     </section>
//   )
// }
//  export default UseState;


//! Using UseState onClickCapture Propagation
 

// import React from 'react';

// const UseState=()=>{
//   return(
//     <section
//     onClickCapture={(e)=>{
//         e.stopPropagation();
//       console.log("Grand Parent");
      
//     }}>
//       Grand Parent
//       <div 
//        onClickCapture={(e)=>{
//         e.stopPropagation();
//         console.log("Parent");
        
//       }}>
//         parent
//         <button
//         onClickCapture={(e)=>{
//           e.stopPropagation();
//           console.log("Child");
          
//         }}>Child</button>
//       </div>
//     </section>
//   )
// }
//  export default UseState;


//!  It is triky login logout 
import React, { useState } from 'react';


const UseState=()=>{
     const [isloged,setIsLoged]=useState(false)
     
    if(isloged){
      return(
        <header>
          <div id="left">
          
      <button onClick={()=>setIsLoged(false)}>Log In</button>
      </div>
        </header>
       )
    }else{
      return(
      <header>
      <div id="right">
        <div >
       <a href="">Home</a>
       <a href="">Contact</a>
  
        </div>
        <div>
        <button onClick={()=>setIsLoged(true)}>Log Out</button>
        </div>
      
  
  </div>
    </header>
      )
    }
    
}
 export default UseState;
