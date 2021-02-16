import React, { useState, useContext, useEffect } from "react";
import bgImage from "../img/bg.jpg";
import { useInView } from "react-intersection-observer";
import PopUpButton from "./popUpButton";
import "../styles/home.css";

const Home = () => {
  const { ref, inView, entry } = useInView({
    initialInView: true,
  });

  return (
    <div id="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div id="intro">
        <h3>Hi! I'm Ruslan</h3>
        <p ref={ref}>I craft web applications</p>
      </div>
      <PopUpButton
        caller="home"
        event={{
          inView: inView,
        }}
      />
    </div>
  );
};

export default Home;
