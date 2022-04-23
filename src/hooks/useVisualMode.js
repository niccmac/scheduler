import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [ mode, setMode ] = useState(initial);
  const [ history, setHistory ] = useState([initial]);

  function transition(newMode, replaceMode) {
    if (!replaceMode) {
      setHistory([...history, newMode]);
      setMode(newMode);
    }
    history.splice(-1, 1);
    setMode(newMode);  
  }

  function back() {
    if ( history.length < 2) {
      console.log(history[0])
      setMode(history[0]);  
      return;
    }
    const oneBack = history[history.length -2];
    history.splice(-1, 1);
    setMode(oneBack);  
  };

  return { mode, transition, back };
}