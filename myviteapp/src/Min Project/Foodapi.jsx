import  {React, createContext, useEffect, useState } from 'react'
export const RecipeContext =createContext();
const Foodapi = ({children}) => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((Response)=>Response.json())
        .then((data)=>{
            setRecipes(data.recipes);
            console.log(data);
            
        })
    },[]);
  return (
    <RecipeContext.Provider value={recipes}>
        {children}
    </RecipeContext.Provider>
  );
};
export default Foodapi
