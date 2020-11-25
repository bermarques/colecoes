import { useState, useEffect } from "react";
import axios from "axios";

import Head from "../../components/header";
import CharactersCard from "../../components/charactersCard";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  console.log(characters);

  return (
    <>
      <Head />
      <CharactersCard arr={characters} />
    </>
  );
};

export default RickAndMorty;
