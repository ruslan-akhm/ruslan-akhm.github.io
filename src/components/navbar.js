import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import navBg from "../img/nav.jpg";
import "../styles/navbar.css";

const Navbar = () => {
  const { isMobile, setIsMobile, isMenu, setIsMenu } = useContext(Context);

  useEffect(() => {
    //preventing some bugs with mobile/desktop menu when resizing browser window
    if (isMobile) {
      document.getElementById("nav-box").style.display = "none";
      document.getElementById("nav-box").className = "mobile-box";
    } else {
      document.getElementById("nav-box").style.display = "block";
      document.getElementById("nav-box").className = "menu-box";
      setIsMenu(false);
    }
  }, [isMobile]);

  const handleMenu = () => {
    let display;
    let btn;
    let anim;
    console.log(isMenu);
    if (isMenu) {
      display = "none";
      btn = "&#9776;";
      anim = "none";
      setIsMenu(false);
    } else {
      display = "block";
      btn = "&#10005;";
      anim = "slideIn .5s ease";
      setIsMenu(true);
    }
    document.getElementById("nav-box").style.display = display;
    document.getElementById("nav-box").style.animation = anim;
    document.getElementById("mobile-btn").innerHTML = btn;
  };

  return (
    <div id="navbar" style={{ backgroundImage: `url(${navBg})` }}>
      {isMobile ? (
        <button
          id="mobile-btn"
          className={isMenu ? "mobile-close" : " mobile-open"}
          onClick={handleMenu}
        >
          &#9776;
        </button>
      ) : null}
      <div id="nav-box">
        <ul>
          <a href="#home" onClick={isMobile ? handleMenu : null}>
            home
          </a>
          <a href="#work" onClick={isMobile ? handleMenu : null}>
            portfolio
          </a>
          <a href="#bio" onClick={isMobile ? handleMenu : null}>
            about
          </a>
          <a href="#skills" onClick={isMobile ? handleMenu : null}>
            skills
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
