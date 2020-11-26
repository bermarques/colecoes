import { Card } from "antd";
import { Body } from "./style";
import { motion } from "framer-motion";

const { Meta } = Card;

const CharactersCard = ({ arr, fav, setFav }) => {
  const getCard = (evt) => {
    const card = evt.currentTarget.children[0].children[0];
    setFav([...fav, { name: card.alt, image: card.src }]);
  };

  return (
    <Body>
      {arr.map((card, idx) => {
        return (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Card
              onClick={getCard}
              key={idx}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={card.name} src={card.image} />}
            >
              <Meta title={card.name} />
            </Card>
          </motion.button>
        );
      })}
    </Body>
  );
};

export default CharactersCard;
