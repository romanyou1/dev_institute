import { useState } from "react";

function App() {

  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const addVote = (index) => {

    const newLanguages = [...languages];
    newLanguages[index].votes += 1;

    setLanguages(newLanguages);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Vote Your Favorite Language</h1>

      {languages.map((lang, index) => (
        <div key={index} style={{ margin: "10px" }}>

          <span style={{ marginRight: "10px" }}>
            {lang.votes}
          </span>

          <span style={{ marginRight: "10px" }}>
            {lang.name}
          </span>

          <button onClick={() => addVote(index)}>
            Click Here
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;