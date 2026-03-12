import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3.jsx";

function App() {

  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
  };

  return (
    <>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <Exercise />
    </>
  );
}

export default App;