import React, { Fragment } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

//! By using Native way Hello World First Program

/*
    let a=React.createElement("h1",null,"Hello World!!!!");
    ReactDOM.createRoot(document.getElementById("root")).render(a);
 */

//! Apply Css To The Element in property area

/*
   let b=React.createElement("h1",{style:{color:"red",background:"grey"}},"hello world!")
   ReactDOM.createRoot(document.getElementById("root")).render(b);

   */

//! Nested Program In Native Way

/*
  const {createElement}=React;

   let c=createElement("div",{id:"box"},
     createElement("div",{id:"container-box"},
        createElement("h1",null,"hello world!")

     )
   );
   ReactDOM.createRoot(document.getElementById("root")).render(c);

   */

   //! I create one form by using native way
/*
const { createElement } = React;

let f = createElement(
  "h1",
  { style: { color: "orange", backgroundColor: "pink" } },
  " REGISTRATION FORM",
  createElement("br"),
  createElement(
    "div",
    { id: "box" },
    createElement(
      "form",
      { action: "" },
      createElement(
        "label",
        { htmlFor: "name" },
        "Name: ",
        createElement("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "Enter Name: ",
        })
      ),
      createElement("br"),
      createElement(
        "label",
        { htmlFor: "email" },
        "Email: ",
        createElement("input", {
          type: "email",
          name: "email",
          id: "email",
          placeholder: "Enter Email:",
        })
      ),
      createElement("br"),
      createElement(
        "label",
        { htmlFor: "password" },
        "Password: ",
        createElement("input", {
          type: "password",
          name: "password",
          id: "password",
          placeholder: "Enter Password:",
        })
      ),createElement("br"),

      createElement("button", null, "submit")
    )
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(f);

*/

ReactDOM.createRoot(document.getElementById("root")).render(
 //! Single Element Allowed
  //  <h1>Hello , world!</h1>

//!  For the adding of multiple elements we use the fragment
/*
    <Fragment>
      <h1>Hello, World!</h1>
      <p>This is a paragraph</p>
      <h2>Welcome to coding world! </h2>
    </Fragment>
*/

//! Use the without using fragmrnt 
<>
<h1>This HTML in a JSX</h1>
<p>This is a paragraph</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores veritatis ex numquam voluptate reiciendis expedita voluptatem, molestias repudiandae sit tempora.</p>
</>

 )
export default Begin;
