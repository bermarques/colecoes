import { useState, useEffect } from "react";
import axios from "axios";

import Head from "../../components/header";
import CharactersCard from "../../components/charactersCard";
import { Button } from "antd";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [statusAPI, setStatusAPI] = useState("");

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacters(res.data.results);
      setStatusAPI(res.data.info);
    });
  }, [url]);

  return (
    <>
      <Head />
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={() => setUrl(statusAPI.prev)}>Anterior</Button>
          <Button onClick={() => setUrl(statusAPI.next)}>Próximo</Button>
        </div>
        <CharactersCard arr={characters} />
      </div>
    </>
  );
};

export default RickAndMorty;
