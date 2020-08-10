import React, { useState, useEffect, useRef } from 'react';
import data from '../data/data'
import '../styles/skill.css';

const Skill = () => {
  
  const skills = data.map(item=>{
    return(
        <div key={item.id} className="skill scroll" data-aos={item.item==1?"slide-right":"slide-left"}>
          <div className="svg" > 
            <img src={item.image} />
          </div>
          <div className={"line ln-"+item.id}></div>
          <div className="description">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      )
  })
  
  return (
    <div id="skill-box">
      {skills}
    </div>
  )
}

export default Skill;
