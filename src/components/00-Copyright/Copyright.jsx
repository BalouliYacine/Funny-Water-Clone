import React from "react";

export default function Copyright() {
  return (
    <p
      style={{
        color: "black",
        backgroundColor: "white",
        minHeight: "30px",
        textAlign: "center",
        padding: "5px",
      }}
    >
      This website was made for education purposes all right reserved to
      <a
        href="https://www.funnywater.com/"
        target="_blank"
        style={{
          color: "black",
        }}
      >
        {" "}
        funnywater.com
      </a>
    </p>
  );
}
