import "./Hero.css";
import React from "react";
import heroImg from "../../img/FW_Cans_Overlapping-768x703.png";

export default function Hero() {
  return (
    <header>
      <nav>
        <ul>
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
      <div className="text">The responsible way to behave irresponsibly.</div>
      <div className="text2">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          distinctio consectetur nihil asperiores sequi. Dolorum corrupti
          dolorem sint, numquam quo sequi adipisci, est a nulla et similique
          aliquam, distinctio eos?
        </p>
      </div>
    </header>
  );
}
