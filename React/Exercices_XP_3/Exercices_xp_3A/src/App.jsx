import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <p>
        Click on the numbers to increase the counters.
        <br />
        The counter crashes at 5.
      </p>

      <hr />

      {/* Simulation 1 */}
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 2 */}
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 3 */}
      <BuggyCounter />
    </div>
  );
}

export default App;