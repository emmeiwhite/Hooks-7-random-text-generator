import React from "react";
import "./RandomText.css";

export default function RandomText({ text }) {
  console.log("Text Now :");
  console.log(text);
  return (
    <ul className="para-wrapper">
      {text.map((para, index) => (
        <li key={index}>{para}</li>
      ))}
    </ul>
  );
}
