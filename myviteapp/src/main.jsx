import React, { Component, createElement } from "react";
import ReactDOM , {createRoot} from "react-dom/client"
 import './index.css'
 import App from "./App";

//! sysntax of native 
/* First- Hello
let a=React.createElement("h1",null,"Hello World!");
ReactDOM.createRoot(document.getElementById("root")).render(a);

*/

/*

let a=React.createElement("h1",{style:{color:"red",background:"grey"}},
  "Hello World!"
)
ReactDOM.createRoot(document.getElementById("root")).render(a);

*/

// let a=React.createElement("div",{id:"box"},
//   React.createElement("div",{id:"container-box"},
//     React.createElement("h1",null,
//       "React Js"
//   )
// )
// )

// let a=React.createElement("form",{action:""},
//  React.createElement("input",{type:"text" , id:"name" , name:"name", placeholder:"enter Name:"})
// )

// ReactDOM.createRoot(document.getElementById("root")).render(
//<h1>Hello World!</h1>

//  <Fragment>
//   <h1 style={{color:"red"}}>Hello World</h1>
//   <hr />
//   <h2>Hello React</h2>
// </Fragment> 

// { <>
// <h1 style={{color:"red"}}>Hello World</h1>
//   <hr />
//   <h2>Hello React</h2>
// </> }

// );



// import React from "react";
// import ReactDOM from "react-dom/client";

// let a = React.createElement("form", { action: "" },
//   React.createElement("input", { type: "text", id: "name", name: "name", placeholder: "Enter Name" })
// );

createRoot(document.getElementById("root")).render(<App/>);



