//! UseRef (Reference)
// import React, {useRef, useEffect} from "react";

// function UseRef(){
//  const elemRef=useRef();
//  console.log(elemRef);

//  useEffect(()=>{
    
//     elemRef.current.focus();
//     elemRef.current.style.backgroundColor="grey"
    
//  },[]);

//  return(
//     <div>
//        <label htmlFor="">Name</label>
//        <input type="text" ref={elemRef} /><br /><br />
//        <label htmlFor="">Email</label>
//        <input type="text" />


       
//     </div>
//  )

// }
// export default UseRef;

//! UseRef


import React, {useRef, useState} from "react";
import video from "../assets/vid.mp4"

const UseRef=()=>{
    const [play, setPlay]=useState(true)
    const videoRef=useRef();
    const playorpause=()=>{
        setPlay(!play);
        if(play===true){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    };
    return(
        <div>
            <video src={video} ref={videoRef }controls></video>
            <button onClick={playorpause}>{play?"play":"pause"}</button>
        </div>
    )
}
export default UseRef;