import React from "react";

// Define the shape of props
interface GreetingProps {
  name: string;
  messageCount: number;
}

// Create the component using the interface
const Greeting: React.FC<GreetingProps> = ({ name, messageCount }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};

export default Greeting;