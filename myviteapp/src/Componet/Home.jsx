import { useContext } from "react"
import {context} from './Contextapi'
import React from "react"

const Home=()=>{
    const data=useContext(context)
    return(
     
        <h1>{data.name}</h1>
      
    )
}
export default Home