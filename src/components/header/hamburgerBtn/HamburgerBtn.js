import React from "react";
import "./hamburger-btn.css";

export default function HamburgerBtn(props) {
  return (
    <button>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </button>
  );
}
