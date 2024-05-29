import "./styles.css";
import { useState } from "react";

export default function App() {
  let [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((isActive) => !isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
