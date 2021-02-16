import React from "react";
import joke from "../img/joke.jpg";
import "../styles/easter.css";

const Easter = () => {
  const closeEaster = () => {
    document.getElementById("easter").style.display = "none";
  };

  return (
    <div id="easter" onClick={closeEaster}>
      <div id="egg">
        <button onClick={closeEaster}>&#10005;</button>
        <h2>Yay! Congrats, you've found the Easter Egg!</h2>
        <p>Please accept this joke as a reward</p>
        <div id="egg-joke">
          <img src={joke} alt="joke" />
        </div>
      </div>
    </div>
  );
};

export default Easter;
