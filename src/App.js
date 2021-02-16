import React, { useEffect, useContext } from "react";
import Home from "./components/home";
import Bio from "./components/bio";
import Skills from "./components/skills";
import Work from "./components/work";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Context } from "./context/context";
import "./App.css";

const App = () => {
  const { isMobile, setIsMobile, isMenu, setIsMenu } = useContext(Context);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  function resize() {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  return (
    <div id="page">
      <Navbar />
      <Home />
      <Work />
      <Bio />
      <Contact />
      <div className="bottom-wrapper">
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default App;
