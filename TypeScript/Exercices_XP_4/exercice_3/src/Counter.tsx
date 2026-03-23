import { useState } from "react";

const Counter = () => {
  // State for the counter value (number)
  const [count, setCount] = useState<number>(0);

  // State for tracking last action (string)
  const [lastAction, setLastAction] = useState<string>("None");

  // Increment function
  const increment = (): void => {
    setCount((prev) => prev + 1);
    setLastAction("Incremented");
  };

  // Decrement function
  const decrement = (): void => {
    setCount((prev) => prev - 1);
    setLastAction("Decremented");
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <p>Last Action: {lastAction}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;