// import axios from 'axios';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const[value,setValue]=useState({
//     name:"",
//     email:"",
//     phone:""
//   })
//   const navigate=useNavigate();
//   function handleSubmit(e){
//     e.preventDefault();
//     axios.post("http://localhost:5000/user",value).then((res)=>{
//       console.log(res);
//       navigate("/")

//     })
//   }
//   return (
//     <div className='d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100'>
//       <h1>Employee Details</h1>
//         <div className='w-75 rounded bg-white border shadow p-4'>
//             <div className='d-flex justify-content-end'>
//                 <button type='button' className='btn btn-success btn-sm'>Add +</button>

//                 </div>
//                 <form onSubmit={(handleSubmit())}>
//               <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e)=>setValue({...value,name:e.target.value})}/>
//               </div>
//               <div class="form-group">
//                 <label for="email">Email</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setValue({...value,email:e.target.value})}/>
//               </div>
//               <div class="form-group">
//                 <label for="phone">Phone</label>
//                 <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" onChange={(e)=>setValue({...value,phone:e.target.value})}/>
//               </div>
//               <button type="submit" className="btn btn-primary mr-2">Submit</button>
//               <button type="button" className="btn btn-secondary" onclick="window.history.back()">Back</button>
//             </form>
//       </div>
//     </div>
//   )
// }

// export default Create

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user", value).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center  align-items-center bg-light vh-100">
      <h1>Employee Details</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-light rounded shadow-sm"
        >
          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user"></i> {/* Icon */}
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  <i className="fas fa-envelope"></i> {/* Icon */}
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  <i className="fas fa-phone"></i> {/* Icon */}
                </span>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  onChange={(e) =>
                    setValue({ ...value, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary px-4">
              <i className="fas fa-paper-plane me-2"></i>Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={() => navigate(-1)}
            >
              <i className="fas fa-arrow-left me-2"></i>Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
