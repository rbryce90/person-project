import React from "react";

export default function HambergerBtn(props) {
  console.log(props);
  return (
    <button>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </button>
  );
}
