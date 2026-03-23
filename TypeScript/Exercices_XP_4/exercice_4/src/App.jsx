import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>User Cards</h1>

      {/* All props */}
      <UserCard name="Roman" age={25} role="Developer" />

      {/* Some props */}
      <UserCard name="Alice" />

      {/* No props */}
      <UserCard />
    </div>
  );
}

export default App;