import React from "react";
import styled from "styled-components";  

const ContactForm=()=>{
    const B=styled.body`
      height:100vh;
      width:100%;
      display:flex;
      align-items: center;
      background-color: rgb(199, 234, 175);
      justify-content: center;
    `
     const F=styled.form`
      
     `
     const L=styled.label`
       text-align: left;
       margin-top:25px;
     `
     const I=styled.input`
       width:300px;
       height:30px;
       border-radius:10px
       border:1px solid;
       margin-top:10px;

     `

     const S=styled.button`
      width:100px;
      margin-top:20px;
      padding:6px;
      background-color: orange;
      cursor:pointer;
      border-radius:5px;
      margin-left:30px;
      text-align: center;
      
      
     ` 
     const K=styled.fieldset`
      display:flex;
      flex-direction:column;
      width:350px;
      padding:20px 10px 20px 10px;
      line-height:20px;
      background-color: rgb(225, 237, 239);
     `
     const Z=styled.legend`
     
     `
    return(
        <B>
        <F action="">
            <K>
              <Z>Contact Form</Z>
           <L for="email">Email</L>
           <I id="email" type='email' />
           <L for="password">Password</L>
           <I id="password" type='password' />
            <S type="submit">Submit</S>
            </K>
        </F>
        </B>

        // Context api-  through the componet tree without having pass props .
        // if you want to avoid    if it is simple or modaret
        //context api provide to store global state
        //if it is global state use can easly access data any context any level
        //context api one of the state container or   , this is not a library
        // to create a context api you should follow the rule
        //1. to sthate global
        //2.by using context api you can create provider or can consume provider
        //3.Directly you can not communicate with provider and consumer

        //! CSS Module provide css scope localy by default and it generate uniqe id or class name
        //! Each Component
        //! those id or class will not conflict to other value

        //Css module provide manachanism for local spacing ,making them more modular and redusing 
        //the 
    )
     
    
}
export default ContactForm;