import { useContext } from "react";
import { RecipeContext } from "./Contextapi"; // Import the correct context
import React from "react";

const Home = () => {
  const recipes = useContext(RecipeContext); // Use context

  return (
    <div id="box">
      {recipes?.map((recipe) => (
        <main key={recipe.id}>
          <div>
            <img src={recipe.image} alt="" />
            <h2 id="name">{recipe.name}</h2>
            <h2 id="rating">{recipe.rating}</h2>
            <h2 id="price">{recipe.cuisine}</h2>
            <h2 id="mealType">Meal Type: {recipe.mealType}</h2>
          </div>
        </main>
      ))}
    </div>
  );
};

export default Home;
