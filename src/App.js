import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import CharacterCard from "./components/character-card";

function App() {
  const [characterList, setCharacterList] = useState({
    characters: [],
    nextUrl: "https://rickandmortyapi.com/api/character/?page=1",
  });
  const [pokemonList, setPokemons] = useState([]);
  const [showPokemons, setShow] = useState(false);

  useEffect(() => {
    axios.get(characterList.nextUrl).then((res) => {
      setCharacterList({
        characters: [...characterList.characters, res.data.results][0],
        nextUrl: res.data.info.next,
      });
    });
  }, []);

  const switchList = () => {
    setShow(!showPokemons);
  };
  const CharButton = () => {
    if (showPokemons) {
      return <button onClick={switchList}>Mostrar Rick and Morty</button>;
    }
    return <button onClick={switchList}>Mostrar Pokemons</button>;
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setPokemons([res.data.results][0]);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <CharButton />
        <CharacterCard
          charArr={showPokemons ? pokemonList : characterList.characters}
        />
      </header>
    </div>
  );
}

export default App;
