import { useState, useEffect } from "react";
import axios from "axios";

import Head from "../../components/header";
import CharactersCard from "../../components/charactersCard";

const Pokemons = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <>
      <Head />
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}></div>
        <CharactersCard arr={characters} />
      </div>
    </>
  );
};

export default Pokemons;
