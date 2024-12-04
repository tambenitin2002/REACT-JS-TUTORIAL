//! useRef (Reference)

// import React, { useRef,useEffect } from 'react';


// function App() {
//      const elemRef=useRef();
//      console.log(elemRef);
//      useEffect=(()=>{
//       elemRef.current.focus();
//       elemRef.current.style.backgroundColor="grey"
//      },[])

//           return(
//              <div>
//                   <label htmlFor="">Name</label>
//                   <input type="text" ref={elemRef}/>
//              </div>
//            )
  
// }
// export default App;

//! UseRef

// import React from 'react';
// import video from "../public/vid.mp4"
// import { useState, useRef } from 'react';

// const App=()=>{
//      const [play, setPlay]=useState(true)
//      const videoRef=useRef();
// const playorpause=()=>{
//      setPlay(!play)
//       if(play===true){
//           videoRef.current.play()
//       }else{
//                videoRef.current.pause();
//           }
//      };
//      return(
//           <div>
//                <video src={video} ref={videoRef}></video>
//                <button  onClick={playorpause}>{play?"play":"pause"}</button>
           
//           </div>
//      )
// }
// export default App;

//! 

// import React, { useState, useRef } from 'react';
// import video from "../public/vid.mp4"

// const App = () => {
//   const [play, setPlay] = useState(true);
//   const [darkMode, setDarkMode] = useState(false); // State for dark mode
//   const videoRef = useRef();

//   const playOrPause = () => {
//     setPlay(!play);
//     if (play) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode); // Toggle dark mode
//   };

//   return (
//     <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//       <video src={video} ref={videoRef}></video>
      
//       <button onClick={playOrPause}>{play ? 'Pause' : 'Play'}</button>
//       <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
//       {/* Your video element */}
//       <video ref={videoRef} src="your-video-source.mp4" />
//     </div>
//   );
// };

// export default App;