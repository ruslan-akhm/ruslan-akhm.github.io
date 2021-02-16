import React from "react";
import contacts from "../data/contacts";
import "../styles/links.css";

const Links = () => {
  let list = contacts.map(item => {
    return item.id > 2 ? null : (
      <a href={item.link} target="_blank">
        <li key={item.id}>
          <div className="links-img">
            <img src={item.img} />
          </div>
        </li>
      </a>
    );
  });

  return (
    <div id="links">
      <ul>{list}</ul>
    </div>
  );
};

export default Links;
