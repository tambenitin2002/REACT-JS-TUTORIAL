import { useContext } from "react"
import React from "react"
const About=()=>{
    const val=useContext(context)
    return(
        <h1>{val.name}</h1>
    )
}
export default About;