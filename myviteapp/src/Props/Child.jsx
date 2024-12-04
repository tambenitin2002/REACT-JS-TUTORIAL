import React from "react";
import PropTypes from 'prop-types'
// import './App.css';

// function Child (Props)
//function Child ({data,obj,ob})
function Child ({obj})
{

   // console.log(obj);
   // console.log(Props);
   
    //! This is a Without Destructure Props
    // console.log(Props.obj);
    // console.log(Props.ob);
    // console.log(Props.data);

    //! This is a With Destructure Props
    // console.log(obj);
    // console.log(ob);
    // console.log(data);
    
 console.log(obj);
    
   // return(
 //! This is a Without Destructure Props
    //     <>
    //    <h1>{Props.data}</h1>
    //    <h1>{Props.obj.name}</h1> 
    //    <h1>{Props.obj.age}</h1> 
    //    <h1>{Props.ob.name}</h1> 
    //    <h1>{Props.ob.strenth}</h1> 
        
    //    </>

 //! This is a With Destructure Props
    //    <>
    //    <h1>{data}</h1>
    //    <h1>{obj.name}</h1> 
    //    <h1>{obj.age}</h1> 
    //    <h1>{ob.name}</h1> 
    //    <h1>{ob.strenth}</h1> 
        
    //    </>

    //! The line of code for the defaultProps and propTypes
   //  <>
   //  <h1>{props.obj}</h1>
    
   //  </>
    //)

    
return(  
     <>
     {
    obj.map((val)=>(
      (
        <div id='box'>
       
         <h3>COURSE_ID: {val.course_id}</h3>
        
         <h3>COURSE_NAME: {val.course_name !== undefined ? val.course_name : Child.defaultProps.course_name}</h3>
         <h3>DURATION: {val.duration !== undefined ? val.duration : Child.defaultProps.duration}</h3>
        
         
         {/* <h3>COURSE_NAME: {val.course_name}</h3> */}
         {/* <h3>DURATION: {val.duration}</h3> */}
         <h3>PRICE: {val.price}</h3>
         <h3 id='lang'>LANGUAGE: {val.language.map((val)=>{
            return <h3> {val}, </h3>
         })}</h3>

         <h3 id='branch'>BRANCH:{val.branch.map((val)=>{
            return <h3> {val}, </h3>
         })}</h3>
    
       </div>
         
    )
        
    ))

   }
    </>

//! The line of code for the defaultProps
//   <>
//    <h1>{Props.obj}</h1>

//    </>
   )
}
//! THis Line of code for the propTypes

// Child.propTypes={
//    obj:PropTypes.string
// }

//! THis Line of code for the defaultProps
Child.defaultProps = {
    duration:0,
    course_name:'enter course name'
};
 
export default Child;

