import ColoredNumber from "./ColoredNumber";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={countUp}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={countDown}
        >
          -
        </button>
      </div>
    </div>
  );
}
