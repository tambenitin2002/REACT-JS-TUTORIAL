import { useContext } from "react";
import { RecipeContext } from "./Contextapi"; // Import the correct context
import React from "react";

const Home = () => {
  const recipes = useContext(RecipeContext); // Use context

  return (
    <div id="box" className="m-5">
      <div className="row">
        {recipes?.map((recipe) => (
          <div key={recipe.id} className="col-md-3 mb-4"> {/* Bootstrap class for 4 cards in a row */}
            <div 
              className="cardh-100 shadow-lg" 
              style={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                borderRadius: '20px', 
                marginTop:80
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={recipe.image}
                className="card-img-top rounded"
                style={{ height: '300px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }} // Cover to maintain aspect ratio
                alt={recipe.name}
              />
              <div className="card-body d-flex flex-column"> {/* Flex column for vertical alignment */}
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Rating: {recipe.rating}</p>
                <p className="card-text">Cuisine: {recipe.cuisine}</p>
                <p className="card-text">Meal Type: {recipe.mealType}</p>
                <button className="btn btn-primary mt-auto">View Recipe</button> {/* Button at the bottom */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
