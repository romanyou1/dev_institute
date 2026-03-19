import React from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import PostList from "./PostList";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <PostList />
      </ErrorBoundary>

      <ErrorBoundary>
        <Example1 />
      </ErrorBoundary>

      <ErrorBoundary>
        <Example2 />
      </ErrorBoundary>

      <ErrorBoundary>
        <Example3 />
      </ErrorBoundary>
    </div>
  );
}

export default App;