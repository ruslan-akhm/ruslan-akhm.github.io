import React, { useEffect, useContext } from "react";
import Links from "./links";
import { Context } from "../context/context";
import "../styles/contact.css";

const Contact = () => {
  const { isContact, setIsContact } = useContext(Context);

  useEffect(() => {
    document.getElementById("contact").style.display = isContact
      ? "flex"
      : "none";
    document.body.style.overflowY = isContact ? "hidden" : "auto";
  }, [isContact]);

  const closeContact = e => {
    if (e.target.id == "contact" || e.target.id == "close-button")
      setIsContact(false);
    else return;
  };

  return (
    <div id="contact" onClick={e => closeContact(e)}>
      <div className="contact-box">
        <h2>Hey, let's talk!</h2>
        <p>
          Feel free to email me directly from here and I will reply at my
          earliest opportunity
        </p>
        <form
          className="send-form"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbxM3itgwvArllKDNmk-KknYIf6sIWse-HcLtScT/exec"
        >
          <input id="name" name="name" required />
          <span className="floating-label">Name *</span>
          <input id="email" name="email" type="text" required />
          <span className="floating-label">Email *</span>
          <textarea id="message" name="message" rows="6" required></textarea>
          <span className="label-textarea">Message *</span>
          <button id="send" type="submit">
            Send
          </button>
        </form>
        <button id="close-button" onClick={e => closeContact(e)}>
          &#10005;
        </button>
        <Links />
      </div>
    </div>
  );
};

export default Contact;
