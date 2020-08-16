import React, { useState, useEffect, useRef } from 'react';
import '../styles/contact.css'


const Contact = () => {

  const handleClick=()=>{
      document.getElementById('form').style.display="block";
      window.scrollTo(0,document.body.scrollHeight)
  }
  
  return (
    <div id="contact">
      <p>
        Want to build something together?<
        br />
        Feel free to message me directly from &nbsp;
        <button onClick={handleClick}>here</button> 
        &nbsp; or via social network, or simply download my resume with contact information at the bottom of this page.
      </p>
      <div id="form">
        <form className="send-form" method="POST" action="https://script.google.com/macros/s/AKfycbxM3itgwvArllKDNmk-KknYIf6sIWse-HcLtScT/exec">
          {/* <label htmlFor="name" className="label-tags">Name/Company: </label> */}
          <input id="name" name="name" placeholder="NAME" />
           {/* <label htmlFor="email" className="label-tags">Your Email:</label> */}
           <input id="email" name="email" type="email" required placeholder="E-MAIL"/>
          {/* <label htmlFor="message" className="label-tags">Message: </label> */}
          <textarea id="message" name="message" rows="6" placeholder="MESSAGE"></textarea>
          <button id="send" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
