import React from "react";
import "./hamburger-btn.css";

export default function HamburgerBtn(props) {
  console.log("props====>", props);
  return (
    <button className="hamburger" onClick={() => props.toggleNav()}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </button>
  );
}
