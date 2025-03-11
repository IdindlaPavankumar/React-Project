import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/' element ={<Home/>}/>
        <Route path='/features'element={<Features/>}/>
        <Route path='/Doctors'element={<Doctors/>}/>
        <Route path='/appointment'element={<Appointment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login'   element={<Login/>}/>
        <Route path='/footer' element={<Footer/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
