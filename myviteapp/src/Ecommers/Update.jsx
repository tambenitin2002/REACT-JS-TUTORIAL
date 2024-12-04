import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`)
      .then((val) => setValue(val.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/user/${id}`, value)
      .then(() => navigate("/"))
      .catch((err) => console.error("Error updating data:", err));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>Update Employee Details</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter your name" 
              value={value.name} 
              onChange={(e) => setValue({ ...value, name: e.target.value })} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              value={value.email} 
              onChange={(e) => setValue({ ...value, email: e.target.value })} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              className="form-control" 
              id="phone" 
              placeholder="Enter your phone number" 
              value={value.phone} 
              onChange={(e) => setValue({ ...value, phone: e.target.value })} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </form>
      </div>
    </div>
  );
}
export default Update;
