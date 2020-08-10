import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  
  return (
    <div className="menu-box">
        <ul>
          <a href="#home"><li>home</li></a>
          <a href="#work"><li>work</li></a>
          <a href="#skill-box"><li>competence</li></a>
          <a href="#contact"><li>contact</li></a>
        </ul>
    </div>
  )
}

export default Navbar;
