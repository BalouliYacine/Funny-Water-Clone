import React from "react";
import "./Flavors.css";
import OneCart from "./OneCart/OneCart";
import Img1 from "../../img/FunnyWater_CucumberMint-768x866.png";
import Img2 from "../../img/FunnyWater_Watermelon-1024x993.png";
import Img3 from "../../img/FunnyWater_Citrus-768x767.png";
import Rec from "../--REC/Rec";

export default function Flavors() {
  let Flavors = [
    {
      name: "Cucumber/Mint",
      desc: "Delightfully crisp yet refreshingly pretentious, this immaculate combination of cucumber, mint, and alcohol is as light as it is delicious. It’s the perfect reward after a half-assed workout and the ideal remedy for a night in with the in-laws.",
      img: Img1,
      btncolor: "#4a6d52",
    },
    {
      name: "Watermelon",
      desc: "A boozy treat that’s never too sweet, this seedless wonder is rich with flavor and ripe for the drinking. It’s the ideal companion for every occasion, whether that’s a summer cookout or the Sunday scaries.",
      img: Img2,
      id: "R",
      btncolor: "#e85a56",
    },
    {
      name: "Citrus",
      desc: "Sunny and light with a sweet and sour bite, this sassy citrus is brimming with natural flavors and only 80 calories. It’s been said to make beach days brighter and zoom meetings shorter. ",
      img: Img3,
      btncolor: "#eb8140",
    },
  ];

  return (
    <div className="flavors">
      <h1>FLAVORS</h1>
      <OneCart
        name={Flavors[0].name}
        desc={Flavors[0].desc}
        img={Flavors[0].img}
        btncolor={Flavors[0].btncolor}
      />
      <Rec />
      <OneCart
        name={Flavors[1].name}
        desc={Flavors[1].desc}
        img={Flavors[1].img}
        btncolor={Flavors[1].btncolor}
        id={Flavors[1].id}
      />
      <OneCart
        name={Flavors[2].name}
        desc={Flavors[2].desc}
        btncolor={Flavors[2].btncolor}
        img={Flavors[2].img}
      />
    </div>
  );
}
