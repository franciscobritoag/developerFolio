import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a
            href="https://github.com/franciscobritoag/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            franciscobritoag
          </a>
        </p>
      </div>
    </Fade>
  );
}
