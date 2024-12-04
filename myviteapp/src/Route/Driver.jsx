import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import NavBar from './NavBar';


const Driver = () => {
  return (
   <BrowserRouter>
   <nav>
    <NavBar/>
   </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  );
};

export default Driver;