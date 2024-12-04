import { createContext } from "react";
import React from "react";
export const context=createContext();

const Contextapi=({children})=>{
    const emp={
        name:"Nitin"
    }
    return(
        <context.Provider value={emp}>
            {children}
        </context.Provider>
    )
}
export default Contextapi;