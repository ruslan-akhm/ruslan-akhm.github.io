import React from "react";
import projects from "../data/projects";
import "../styles/work.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Work = () => {
  let projectList = projects.map((item, index) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in"
        className="card"
        key={item.number}
      >
        <div className="project-image">
          <img src={item.img} alt={item.name + " project preview"} />
        </div>
        <div className="project-info">
          <h2>{item.name}</h2>
          <ul>
            {item.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
          <p>{item.description}</p>
          <div className="project-links">
            <a
              className={index === 1 || index === 3 ? "second" : null}
              href={item.linkProject}
              target="_blank"
            >
              View Project
            </a>
            <a href={item.linkCode} target="_blank">
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="work">
      <h1>My recent projects</h1>
      <div className="card-box">{projectList}</div>
    </div>
  );
};

export default Work;
