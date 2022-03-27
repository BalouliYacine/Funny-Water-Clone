import React from "react";
import "./Merch.css";
import MerchTshirt from "../../img/FunnyWater_TShirt-1-1024x769.png";

export default function Merch() {
  return (
    <div className="merch" id="Merch">
      <div className="merchImg">
        <img src={MerchTshirt} alt="MerchTshirt" />
      </div>
      <div className="merchTxt">
        <h3>Merch</h3>
        <p>
          Crafted to make you look like a tall glass of water… with booze in it.
        </p>
        <button>VISIT SHOP</button>
      </div>
    </div>
  );
}
