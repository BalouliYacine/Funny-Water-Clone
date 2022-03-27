import React from "react";
import "./Press.css";
import Forebs from "../../img/press/Forbes.png";
import MarketWatch from "../../img/press/marketwatch.png";
//
import Bomb from "../../img/press/bomb.png";
import Bevnet from "../../img/press/Bev-net.png";
import TestingThng from "../../img/press/TestingThng.png";
import Cpgd from "../../img/press/CPGD.png";
//
import Bartender from "../../img/press/Bartender.png";
import Winsight from "../../img/press/Winsight.png";
import foodDive from "../../img/press/food-dive.png";
import trndhunter from "../../img/press/trndhunter.png";
import chilled from "../../img/press/chilled.png";
import JustDrinks from "../../img/press/Just-drinks.png";
import convinenceStore from "../../img/press/convinence-store.png";
import Cheers from "../../img/press/Cheers.png";
import brewbound from "../../img/press/brewbound.png";
import Kane from "../../img/press/Kane.png";
import daily from "../../img/press/daily.png";
import BeverageDynamics from "../../img/press/Beverage-Dynamics.png";
//

export default function Press() {
  return (
    <div className="press" id="Press">
      <h2>PEOPLE ARE TALKING....</h2>
      <div className="twoPress">
        <img src={Forebs} alt="Forebs" />
        <img src={MarketWatch} alt="MarketWatch" />
      </div>
      {/*  */}
      <div className="foorPress">
        <img src={Bomb} alt="Bomb" />
        <img src={Bevnet} alt="Bevnet" />
        <img src={TestingThng} alt="TestingThng" />
        <img src={Cpgd} alt="Cpgd" />
      </div>
      {/*  */}
      <div className="sixPress">
        <img src={Bartender} alt="Bartender" />
        <img src={Winsight} alt="Winsight" />
        <img src={foodDive} alt="foodDive" />
        <img src={trndhunter} alt="trndhunter" />
        <img src={chilled} alt="chilled" />
        <img src={JustDrinks} alt="JustDrinks" />
        <img src={convinenceStore} alt="convinenceStore" />
        <img src={Cheers} alt="Cheers" />
        <img src={brewbound} alt="brewbound" />
        <img src={Kane} alt="Kane" />
        <img src={daily} alt="daily" />
        <img src={BeverageDynamics} alt="BeverageDynamics" />
      </div>
    </div>
  );
}
