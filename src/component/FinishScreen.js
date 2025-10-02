import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentange = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points} </strong> out of {maxPossiblePoints} (
        {Math.ceil(percentange)}%)
      </p>
      <p className="highscore">
        ( Highscore : {highscore}
        {highscore < 1 ? " point" : " points"}){" "}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
