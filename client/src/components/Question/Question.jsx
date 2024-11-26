import React, { useEffect } from "react";
import './Question.css'

const Question = ({ data, onAnswer }) => {
  const colorPalette = [
    "#A4C639",
    "#F4A261",
    "#5DADE2",
    "#F5CBA7",
    "#E74C3C",
    "#8E44AD",
    "#1ABC9C",
    "#F1C40F",
    "#34495E",
    "#2ECC71"
  ];

  useEffect(e => {
    document.querySelectorAll(".question__answer").forEach((el, i) => {
      el.style.backgroundColor = colorPalette[i]
    })
  }, [])

  return (
    <div className="question">
      <h2 className="question__title">{data.question}</h2>
      <div className="question__buttons">
        {data.options.map((option, index) => (
          <button className="question__answer" key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;