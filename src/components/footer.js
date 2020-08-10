import React, { useState, useEffect, useRef } from 'react';
import contacts from '../data/contacts'
import '../styles/footer.css'

const Footer = () => {
  
  let list = contacts.map(item=>{
    return(
      <li key={item.id}>
          <a href={item.link} target="_blank">
            <div className="logo">
              <img src={item.img} />
            </div>
            <p>{item.name}</p>
          </a>
        </li>
    )
  })
  
  return (
    <div id="footer">
      <ul>
        {list}
      </ul>
      <p>This website is portfolio of Ruslan Akhmetshin. For license references, please see <a href="">Licenses</a></p>
    </div>
  )
}

export default Footer;
