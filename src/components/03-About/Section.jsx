import React from "react";
import "./Section.css";
import Box from "../../img/FW_Bev-Shop_6-Pack-Render-1-2-2.png";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="section" id="About">
      <div className="sectionImg">
        <img src={Box} alt="" />
      </div>
      <Fade>
        <div className="sectionTxt">
          <h3>We’re sorry it’s come to this…</h3>
          <br />
          <p>
            created alcohol-infused water with natural flavors, electrolytes,
            antioxidants, and no bubbles.
          </p>
          <br />
          <p>
            It’s a light, refreshing beverage but at 3.75% ABV still gives you a
            little kick.
          </p>
          <br />
          <p>
            It’s functional. It’s dysfunctional. It’s both at the same time.
            Sound like someone you know?
          </p>
        </div>
      </Fade>
    </div>
  );
}
