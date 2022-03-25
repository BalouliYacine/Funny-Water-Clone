import React from "react";
import "./OneCart.css";
import Img1 from "../../../img/FunnyWater_CucumberMint-768x866.png";

export default function OneCart() {
  return (
    <div className="OneCart">
      <div className="OneCartTxt">
        <h3>Cucumber/Mint</h3>
        <p>
          Delightfully crisp yet refreshingly pretentious, this immaculate
          combination of cucumber, mint, and alcohol is as light as it is
          delicious. It’s the perfect reward after a half-assed workout and the
          ideal remedy for a night in with the in-laws.
        </p>
        <button>BUY NOW</button>
      </div>
      <div className="OneCartTxt">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
}
