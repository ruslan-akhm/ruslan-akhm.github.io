import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import "../styles/contact.css";

const PopUpButton = props => {
  const { footerInView } = useContext(Context);

  useEffect(() => {
    let btn = document.getElementById("side-button");
    if (footerInView == true) {
      btn.style.animation = "slideDown 0.2s ease";
      setTimeout(() => {
        btn.style.display = "none";
      }, 200);
    } else if (footerInView == false) {
      btn.style.display = "block";
      btn.style.animation = "slideUp 0.2s ease";
    }
  }, [footerInView]);

  useEffect(() => {
    let btn = document.getElementById("side-button");
    if (footerInView == true) {
      btn.style.animation = "slideDown 0.2s ease";
      setTimeout(() => {
        btn.style.display = "none";
      }, 200);
    } else if (footerInView == false) {
      btn.style.display = "block";
      btn.style.animation = "slideUp 0.2s ease";
    }
    if (props.caller == "home") {
      if (props.event.inView == false) {
        btn.className = "";
        btn.innerText = `✉`;
        btn.classList.add("mail-button");
      } else {
        btn.className = "";
        btn.innerText = "LET'S TALK!";
        btn.classList.add("home-button");
      }
      return;
    }
  }, [props]);

  const { isContact, setIsContact } = useContext(Context);

  return (
    <button
      id="side-button"
      className="home-button"
      onClick={() => setIsContact(true)}
    ></button>
  );
};

export default PopUpButton;
