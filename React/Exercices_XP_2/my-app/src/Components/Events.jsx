import React, { useState } from "react";

function Events() {

  // Part III: state for toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Part III
  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>

      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>

      <br /><br />

      {/* Part II */}
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
      />

      <br /><br />

      {/* Part III */}
      <h3>Exercise 9:</h3>
      <button onClick={toggleButton}>
        {isToggleOn ? "ON" : "OFF"}
      </button>

    </div>
  );
}

export default Events;