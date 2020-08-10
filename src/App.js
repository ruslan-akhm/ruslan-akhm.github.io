import React, { useState, useEffect, useRef } from 'react';
import Home from './components/home'
import Bio from './components/bio'
import Work from './components/work'
import Skill from './components/skill'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css';
import AOS from 'aos';

const App = () => {
  
    useEffect(()=>{
      AOS.init({
        once:true
      });
    },[])

  return (
     <div id="page">
      <Home />
      <Navbar />
      <Bio />
      <Work />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
