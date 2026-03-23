import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCount(length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Character Counter</h2>

      <textarea
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        rows="5"
        cols="40"
      />

      <p>Character count: {count}</p>
    </div>
  );
}

export default CharacterCounter;