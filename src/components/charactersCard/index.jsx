import { Card, Button } from "antd";
import { Body } from "./style";
import { motion } from "framer-motion";

const { Meta } = Card;

const CharactersCard = ({ arr, fav, setFav, favButton = true }) => {
  const getCard = (evt) => {
    const card =
      evt.currentTarget.parentNode.parentNode.children[0].children[0];
    setFav([...fav, { name: card.alt, image: card.src }]);
  };

  return (
    <Body>
      {arr.map((card, idx) => {
        return (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Card
              key={idx}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={card.name} src={card.image} />}
            >
              <Meta title={card.name} />
              {favButton && (
                <Button onClick={getCard}>Adicionar aos favoritos </Button>
              )}
            </Card>
          </motion.button>
        );
      })}
    </Body>
  );
};

export default CharactersCard;
