import React from "react";
import skillsList from "../data/skillsList";
import "../styles/skills.css";

const Skills = () => {
  let skills = skillsList.map((skill, index) => {
    return (
      <div className="skills-box" key={index}>
        <div className="skills-image">
          <img src={skill.img} alt="skill/tool" />
        </div>
        <p>{skill.skill}</p>
      </div>
    );
  });

  return (
    <div id="skills">
      <h1>My skillset</h1>
      <div id="skills-container">{skills}</div>
    </div>
  );
};

export default Skills;
