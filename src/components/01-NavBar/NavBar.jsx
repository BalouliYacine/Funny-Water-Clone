import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });
  const [Visibility, setVisibility] = useState("");
  function ScreenSize() {
    const detectSize = () => {
      if (windowDimenion.winWidth <= 600) {
        setVisibility("hidden");
      } else setVisibility("");

      detectHW({
        winWidth: window.innerWidth,
      });
    };

    useEffect(() => {
      window.addEventListener("resize", detectSize);

      return () => {
        window.removeEventListener("resize", detectSize);
      };
    }, [windowDimenion]);

    return (
      <div>
        <p>
          Width: <strong>{windowDimenion.winWidth}</strong>
        </p>
        <p>
          Height: <strong>{windowDimenion.winHeight}</strong>
        </p>
      </div>
    );
  }

  ScreenSize();
  function Show() {
    //
    setVisibility(() => {
      if (Visibility === "visible") return "hidden";
      else return "visible";
    });
  }

  return (
    <nav>
      <ul className="show">
        <li>
          <li>
            <button onClick={Show}>Show</button>
          </li>
        </li>
      </ul>

      <ul className="navUL" style={{ visibility: `${Visibility}` }}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Press">Press</a>
        </li>
        <li>
          <a href="#BUY NOW">BUY NOW</a>
        </li>
        <li>
          <a href="#Merch">Merch</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
