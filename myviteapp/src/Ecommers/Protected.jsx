// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// let Protected = ({ element }) => {
//   let navigate = useNavigate();

//   useEffect(() => {
//     let login = localStorage.getItem("login");
//     if (!login) {
//       navigate("/login"); // If user is not logged in, redirect to login
//     }
//   },[]);

//   return element; // Render the passed component if the user is authenticated
// };

// export default Protected;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// let Protected = ({ Element }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   let navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is logged in using localStorage
//     let login = localStorage.getItem("login");
//     if (!login) {
//       navigate("/login"); // Redirect to login if not authenticated
//     } else {
//       setIsAuthenticated(true); // Allow access if authenticated
//     }
//   });

//   // Only render the protected component if the user is authenticated
//   return(
//     <div>
//       <Element/>
//     </div>
//   );
// };

// export default Protected;

// Protected.js
// Protected.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <Element />;
};

export default Protected;
