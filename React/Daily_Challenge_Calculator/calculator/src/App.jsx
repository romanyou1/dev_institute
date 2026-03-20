import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    let output;

    switch (operation) {
      case "add":
        output = a + b;
        break;
      case "subtract":
        output = a - b;
        break;
      case "multiply":
        output = a * b;
        break;
      case "divide":
        output = b !== 0 ? a / b : "Cannot divide by 0";
        break;
      default:
        output = 0;
    }

    setResult(output);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ margin: "0 10px" }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={calculate}>Add Them</button>
      </div>

      <h2 style={{ marginTop: "30px" }}>
        Result: {result !== null ? result : 0}
      </h2>
    </div>
  );
}