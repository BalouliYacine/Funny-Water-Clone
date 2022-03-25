import React from "react";
import "./Flavors.css";
import OneCart from "./OneCart/OneCart";

export default function Flavors() {
  return (
    <div className="flavors">
      <h1>FLAVORS</h1>
      <OneCart />
      <OneCart className="R" />
      <OneCart />
    </div>
  );
}
