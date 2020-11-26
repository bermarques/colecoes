import { useState, useEffect } from "react";
import axios from "axios";
import Head from "../../components/header";

import { Card } from "antd";
import { Body } from "../../components/charactersCard/style";
import { motion } from "framer-motion";
const { Meta } = Card;

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

      <Body>
        {characters.map(({ name }, index) => (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={name}
                />
              }
            >
              <Meta title={name} />
            </Card>
          </motion.button>
        ))}
      </Body>
    </>
  );
};

export default Pokemons;
