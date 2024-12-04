import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword:''
});
const navigate = useNavigate;

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/users", values).then((res) => {
        console.log(res);
        navigate("/login");
    }).catch((error) => {
      console.error('Error during signup', error)});
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '25rem', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
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
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password Input */}
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
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100"><a class="fw-bold text-white" href="/login">Sign Up</a></button>

          {/* Link to Login */}
          <div className="text-center mt-3">
            <small>Already have an account? <a href="/login">Login</a></small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
