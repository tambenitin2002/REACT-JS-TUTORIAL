import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

//! useEffect

// import React, { useState } from 'react';
// import { useEffect } from 'react';

// function Effect() {
//       const [state,setState]=useState({
//             count:0
//       })
//           useEffect(() => {
//             alert("Welcome to my webpage!")
//            },[] )


//            useEffect(() => {
//             alert("Count Was Change!") 
//            },[state.count] )  
           
//            return(
//              <>
//              <button onClick={()=>setState({count:state.count+5})}>Counter {state.count}</button>
//              </>
//            )
  
// }



// export default Effect;