import React, { useState } from 'react';
const CycleCounter = () => {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click+1)
  }
  return (
  <button data-testid="cycle-counter" 
  style={{ fontSize: '1rem', width: 120, height: 30}}
  onClick={handleClick}>
    {click}</button>
    );
}
export default CycleCounter;
