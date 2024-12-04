import { createContext, useEffect, useState } from "react";
import React from "react";

// Export context properly
export const RecipeContext = createContext();

const Contextapi = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Initialize with an empty array to avoid undefined

  useEffect(() => {
    // Fetching data from the API
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json()) // Fixed the capital 'Response' issue
      .then((data) => {
        console.log(data); // Log fetched data to check structure
        setRecipes(data.recipes); // Assuming the API returns { recipes: [...] }
      })
      .catch((error) => console.error("Error fetching data:", error)); // Added error handling
  }, []);

  return (
    <RecipeContext.Provider value={recipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export default Contextapi;
