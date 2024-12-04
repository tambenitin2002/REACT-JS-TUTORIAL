import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Food from './Food';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Error from './Error';
import Foodapi from './Foodapi';
import Footer from './Footer';
const Driver = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
    <NavBar/>
    </nav>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/food' element={<Foodapi>
       <Food/>
    </Foodapi>}/>
    <Route path='/*' element={<Error/>}/>
    </Routes>
  
    <footer>
    <Footer/>
    </footer>
    </BrowserRouter>

    </>
  )
}

export default Driver