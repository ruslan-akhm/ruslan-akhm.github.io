import React, { useState, useEffect, useRef } from 'react'
import Particles from "react-tsparticles"
import optionParticles from "../data/optionParticles"
import '../styles/home.css';

const Home = () => {
    
  return (
    <div id="home">
      <Particles id="tsparticles" options={optionParticles} />
      <div id="intro">
        <h3>Hi! I'm Ruslan</h3>
        <p>I create experience</p>
      </div>
      
    </div>
  )
}

export default Home;
