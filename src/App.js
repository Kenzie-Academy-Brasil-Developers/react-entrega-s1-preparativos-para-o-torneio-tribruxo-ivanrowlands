import { useEffect, useState } from "react";
import "./App.css";
import ResultPage from "./components/selection";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setCharacters(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="App-header">
      <ResultPage characters={characters} />
    </main>
  );
}

export default App;
