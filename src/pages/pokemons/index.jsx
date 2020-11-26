import { useState, useEffect } from "react";
import axios from "axios";
import Head from "../../components/header";
import PokeCards from "./cards";

const Pokemons = ({ fav, setFav }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <>
      <Head />
      <PokeCards characters={characters} fav={fav} setFav={setFav} />
    </>
  );
};

export default Pokemons;
