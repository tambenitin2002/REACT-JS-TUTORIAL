import React  from "react";
import Child from "./child";
// import './App.css';
function Parent(){
    // let course={
    //     name:"Nitin",
    //     age:24
    // }
    // let classes={
    //     name:"15th",
    //     strenth: 50
    // }


    // let a="Nitin"
    // let b="Akshay"
    // let c="Rakesh"

    let course=[
      {
        course_id:1,
        course_name:"javascript",
        trainer:["Satyam","Aravind"],
        duration: 1,
        price:10000,
        branch:["btr","btn"],
        language:["js","dom", "css"],

      },
      {
        course_id:2,
        // course_name:"React js",
        trainer:["Satyam"],
        // duration: 2,
        price:15000,
        branch:["btr","btn"],
        language:["js","dom", "css"],
      }
    ]
    return(
      <>
         {/* <Child data='JS' obj={course} ob={classes}/> */}
         <div id='child'>
         {/* <Child obj={course.language} /> */}
         <Child obj={course} />
           {/* <Child /> */}
         </div>
        

         {/* <Child obj={a="Vikas"}/> */}

         {/* <Child obj={a}/> */}

         {/* <Child /> */}

      </>
    )
}
export default Parent;