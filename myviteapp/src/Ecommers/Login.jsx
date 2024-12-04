// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Fetch users from the database
//       const res = await axios.get('http://localhost:5000/users');
//       const users = res.data;

//       // Check if email and password match a user in the database
//       const user = users.find(
//         (u) => u.email === values.email && u.password === values.password
//       );

//       if (user) {
//         // On successful login, set the login flag in localStorage
//         console.log('Login successful');
//         localStorage.setItem('login', 'true');
//         navigate('/'); // Redirect to home page after login
//       } else {
//         setError('Invalid email or password');
//       }
      
//     } catch (error) {
//       console.error('Error during login', error);
//       setError('Something went wrong');
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow-lg p-4" style={{ width: '22rem', borderRadius: '15px' }}>
//         <h3 className="text-center mb-4">Login</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="form-group mb-3">
//             <label htmlFor="email">Email</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="fas fa-envelope"></i>
//               </span>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter email"
//                 value={values.email}
//                 onChange={(e) => setValues({ ...values, email: e.target.value })}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-group mb-4">
//             <label htmlFor="password">Password</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="fas fa-lock"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter password"
//                 value={values.password}
//                 onChange={(e) => setValues({ ...values, password: e.target.value })}
//                 required
//               />
//             </div>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Login</button> 

//           <div className="text-center mt-3">
//             <small>Don't have an account? <Link to={"/signup"}>Sign up</Link></small>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// Login.js

import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:5000/users');
      const users = res.data;
      const user = users.find(
        (u) => u.email === values.email && u.password === values.password
      );

      if (user) {
        console.log('Login successful');
        localStorage.setItem('login', 'true');
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login', error);
      setError('Something went wrong');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '22rem', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <div className="text-center mt-3">
            <small>
              Don't have an account? <Link to={'/signup'}>Sign up</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

