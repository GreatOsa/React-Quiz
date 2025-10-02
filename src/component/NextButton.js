import React from "react";

export default function NextButton({ dispatch, answer, numQuestion, index }) {
  if (answer === null) return null;

  if (index + 1 < numQuestion)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  else
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
