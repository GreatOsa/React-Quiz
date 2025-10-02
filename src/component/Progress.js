import React from "react";

export default function Progress({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />{" "}
      {/* this is a progressbar, once you answer a question the progress bar will increase */}
      <p>
        Question <strong>{index + 1} </strong> / {numQuestion}{" "}
      </p>
      <p>
        <strong>{points} </strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
