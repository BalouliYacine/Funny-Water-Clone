import React, { useState, useEffect } from "react";
import "./NavBar.css";
import menu from "../../img/layer1.svg";

export default function NavBar() {
  const [Visibility, setVisibility] = useState(false);
  const [windowDimenion, detectW] = useState(window.innerWidth);

  function Show() {
    setVisibility(!Visibility);
  }
  useEffect(() => {
    const changeWidth = () => {
      detectW(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <ul className="show">
        <li>
          <button onClick={Show}>
            <img src={menu} alt="" />
          </button>
        </li>
      </ul>

      {(Visibility || windowDimenion >= 600) && (
        <ul className="navUL">
          <li onClick={Show}>
            <a href="#About">About</a>
          </li>
          <li onClick={Show}>
            <a href="#Press">Press</a>
          </li>
          <li onClick={Show}>
            <a href="#BUY NOW">BUY NOW</a>
          </li>
          <li onClick={Show}>
            <a href="#Merch">Merch</a>
          </li>
          <li onClick={Show}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
