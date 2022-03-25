import "./Hero.css";
import React from "react";
import heroImg from "../../img/FW_Cans_Overlapping-768x703.png";

export default function Hero() {
  return (
    <header>
      <div className="heroSection">
        <div className="heroTxt">
          <h1>
            FUNNY <span className="TM">TM</span>
            <br />
            <span className="WATER">WATER</span>
          </h1>
          <p>Finally, a reason to drink water.</p>
          <button>BUY NOW</button>
        </div>

        <div className="heroImg">
          <img src={heroImg} alt="" />
        </div>
      </div>

      <div className="text">
        <p>The responsible way to behave irresponsibly.</p>
      </div>
    </header>
  );
}
