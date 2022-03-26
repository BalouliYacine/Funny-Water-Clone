import React, { useState } from "react";
import "./OneCart.css";

export default function OneCart(props) {
  const [color, setcolor] = useState("#fff");
  const [bgColor, setbgColor] = useState(props.btncolor);
  function hover() {
    setcolor(props.btncolor);
    setbgColor("#fff");
  }
  function leaveH() {
    setcolor("#fff");
    setbgColor(props.btncolor);
  }

  return (
    <div className="OneCart" id={props.id}>
      <div className="OneCartTxt">
        <h3>{props.name} </h3>
        <br />
        <p>{props.desc}</p>

        <button
          style={{
            backgroundColor: bgColor,
            color: color,
            borderColor: props.btncolor,
          }}
          onMouseEnter={hover}
          onMouseLeave={leaveH}
        >
          BUY NOW
        </button>
      </div>

      <div className="OneCartTxt ONIMg">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
