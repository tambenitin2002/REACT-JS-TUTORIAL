// import React from 'react';
//  import { BrowserRouter, Route, Routes } from 'react-router-dom';
//  import Update from './Update';
//  import Home from './Home';
//  import Read from './Read';
//  import NavBar from './NavBar';
//  import Protected from './Protected';
//  import Create from './Create'
//  import Login from './Login';
//  import SignUp from './SignUp';
//  import FoodDriver from './API_Fetch/FoodDriver'
 

//  const Driver = () => {
//    return (
//      <div>
//        <BrowserRouter>
//          <NavBar />
//          <Routes>
//            <Route path="/" element={<Protected Element={Home}/>}/>
//            <Route path="/food" element={<FoodDriver/>}/>
//            <Route path="/create" element={<Create/>} />
//            <Route path="/update/:id" element={<Update />} />
//            <Route path="/read/:id" element={<Read/>} />
//            <Route path="/login" element={<Login/>} />
//            <Route path="/signup" element={<SignUp/>} />
//          </Routes>
//        </BrowserRouter>
//      </div>
//    );
// };
// export default Driver;


// Driver.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './Update';
import Home from './Home';
import Read from './Read';
import NavBar from './NavBar';
import Protected from './Protected';
import Create from './Create';
import Login from './Login';
import SignUp from './SignUp';
import FoodDriver from './API_Fetch/FoodDriver';

const Driver = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Element={Home} />} />
          <Route path="/food" element={<FoodDriver />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Driver;
