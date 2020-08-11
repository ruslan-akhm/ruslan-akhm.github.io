import React, { useState, useEffect, useRef } from 'react';
import projects from '../data/projects'
import '../styles/work.css';

const Work = () => {
  
  const mouseEnter=(id)=>{
    document.getElementById(id).style.animation="slideUp .3s";
    document.getElementById(id).style.display="flex";
  }
  
  const mouseLeave=(id)=>{
    document.getElementById(id).style.display="none";
  }
  
  const list = projects.map(item=>{
    return(
      <div className="card" key={item.number} onMouseEnter={(e)=>mouseEnter(item.id)} onMouseLeave={(e)=>mouseLeave(item.id)}>
        <img src={item.img} alt="project-preview"/>
        <div className="project-info" >
          <div className="title">
            <h3>{item.name}</h3>
          </div>
          <div id={item.id} className="text">
            <p>{item.description}</p>
            <a href={item.linkProject} target="_blank">OPEN</a>
            <a href={item.linkCode} target="_blank">CODE</a>
          </div>
        </div>
      </div>
    )
  })
  
  return (
    <div id="work">
      <h3>Check out some of my previous projects</h3>
      <div className="card-box">
        {list}
      </div>
    </div>
  )
}

export default Work;
