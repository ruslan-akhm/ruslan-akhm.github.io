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
          Hi! My name is Ruslan, I am a Toronto-based developer and I like
          crafting web applications by writing clean, readable and maintainable
          code. I continuously expand my skills and knowledge and evolve as a
          developer.
          <br /> I also possess a background in Electronics Engineering and a
          bachelor's degree in Automation.
        </p>
      </div>
      <div id="tech-box">{technologies}</div>
    </div>
  );
};

export default Bio;
