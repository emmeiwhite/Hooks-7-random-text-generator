import React, { useState, useEffect } from "react";
import RandomText from "../random-text/RandomText";
import data from "./../../data";
import "./GeneratorForm.css";

export default function GeneratorForm() {
  const [number, setNumber] = useState(0);
  const [paras, setParas] = useState([]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(number) <= 0) {
      console.log("Zero and Less");
      setParas([data[0]]);
      return setNumber("");
    }

    if (parseInt(number) > 8) {
      console.log("Greater than 8");
      setParas(data);
      return setNumber("");
    }

    if (parseInt(number) >= 1 && parseInt(number) <= 8) {
      console.log("1 to 8");
      const updatedParas = data.filter((para, index) => index < number);
      setParas(updatedParas);
      setNumber("");
    }
  };

  //   useEffect(() => {
  //     setParas(data);
  //   }, []);

  return (
    <div className="generator-wrapper">
      <form onSubmit={handleSubmit}>
        <h3>Tired of boring Lorem Ipsum?</h3>
        <div>
          <span>Paragraphs: </span>
          <input
            type="number"
            name="paraNumber"
            onChange={handleChange}
            value={number}
          />
          <button>Generate</button>
        </div>
      </form>

      {paras.length > 0 && <RandomText text={paras} />}
    </div>
  );
}
