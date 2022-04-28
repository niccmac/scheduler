import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [ mode, setMode ] = useState(initial);
  const [ history, setHistory ] = useState([initial]);
  
  function transition(newMode, replaceMode) {
    if (replaceMode) {
      history.splice(-1, 1);
    } 
    const newHistory = [...history, newMode];
    setHistory(newHistory)
    setMode(newMode);

    
  };  
   
  function back() {
    console.log("gets in here")
    if ( history.length < 2) {
      setMode(history[0]);  

    } else {
      const oneBack = history[history.length -2];
      history.splice(-1, 1);
      setMode(oneBack); 
    }
     
  };

  return { mode, transition, back };
}