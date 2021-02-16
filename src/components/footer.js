import React, { useContext, useEffect } from "react";
import Links from "./links";
import Easter from "./easter";
import { Context } from "../context/context";
import { useInView } from "react-intersection-observer";
import "../styles/footer.css";

const Footer = () => {
  const { isContact, setIsContact, footerInView, setFooterInView } = useContext(
    Context
  );

  const { ref, inView, entry } = useInView({
    threshold: "0.1",
  });

  useEffect(() => {
    if (entry) {
      setFooterInView(entry.isIntersecting);
    }
  }, [entry]);

  const easterEgg = () => {
    document.getElementById("easter").style.display = "flex";
  };

  const openContact = () => {
    setIsContact(true);
  };

  return (
    <div id="footer" ref={ref}>
      <h3>Feel like working together?</h3>
      <button onClick={openContact} className="footer-button">
        Let's talk
      </button>
      <Links />
      <p>
        by{" "}
        <a
          href="https://www.linkedin.com/in/ruslan-akhmetshin-880757117/"
          target="_blank"
        >
          Ruslan Akhmetshin
        </a>{" "}
        | from
        <img
          onClick={easterEgg}
          className="cntower"
          src="https://cdn.glitch.com/91f0f8c0-742f-4b2e-8e89-678ce527a37c%2Fmethod-draw-image%20(1).svg?v=1600914611444"
          alt="hidden link"
        />
        | 2020
      </p>
      <Easter />
    </div>
  );
};

export default Footer;
