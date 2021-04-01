import React from "react";
import me from "../img/ruslan.jpg";
import pencil from "../img/pencil.jpg";
import bioInfo from "../data/bioInfo";
import "../styles/bio.css";

const Bio = () => {
  let technologies = bioInfo.map((item, index) => {
    return (
      <div className="tech-card" key={item.id}>
        <div className={"tech-image tech-image-" + item.id}>
          <div
            className={item.reference}
            style={
              item.reference == "learnability-logo"
                ? { backgroundImage: `url(${pencil})` }
                : null
            }
          >
            <p>{item.reference == "backend-logo" ? "</>" : null}</p>
          </div>
          <img src={item.image} alt="technology" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <div id="bio">
      <h1>About me</h1>
      <div id="bio-box">
        <div id="bio-image">
          <img src={me} alt="photo of me" />
        </div>
        <p>
          Hi! My name is Ruslan. I am passionate about crafting things with
          code. I've been around coding since University. My first experince of
          programming was with PLCs where I studied several languages, mostly
          graphical. First UI that I built was a HMI - human machine interface
          for operators, working at the oilfileds, so they could see sensors'
          readings and control valves.
          <br />
          <br />
          During my college days I studied the very basics of computer science
          as well as Python and C++ languages. I can surely say I have knowledge
          of not just coding itself, but also 1's and 0's that stand behind it
          as well as the physical layer of electronic signals.
          <br />
          <br />
          For the past year and a half I've been into web software development.
          I am interested in several technologies for web and mobile
          development. I also possess interest in Machine Learning. I am looking
          to grow further and would like to apply my skills in an actual
          full-time role, where I could help the company to achieve it's goals.
        </p>
      </div>
      <div id="tech-box">{technologies}</div>
    </div>
  );
};

export default Bio;
