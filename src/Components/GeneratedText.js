import React from "react";

export const GeneratedText = ({ genText }) => {
  return (
    <div className="generated-text">
      {genText.map((answer, i) => {
        console.log(genText);
        return <p key={i}>{answer}</p>;
      })}
    </div>
  );
};
