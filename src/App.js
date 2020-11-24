import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import CharacterCard from "./components/character-card";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => {
        console.log(res.data.results);
        setCharacterList([...characterList, res.data.results][0]);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CharacterCard charArr={characterList} />
      </header>
    </div>
  );
}

export default App;
