import { Card, Button } from "antd";
import { Body } from "../../components/charactersCard/style";
import { motion } from "framer-motion";
const { Meta } = Card;

const PokeCards = ({ characters, fav, setFav, favButton = true }) => {
  const getCard = (evt) => {
    const card =
      evt.currentTarget.parentNode.parentNode.children[0].children[0];
    setFav([...fav, { name: card.alt, image: card.src }]);
  };

  return (
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
            {favButton && (
              <Button onClick={getCard}>Adicionar aos favoritos </Button>
            )}
          </Card>
        </motion.button>
      ))}
    </Body>
  );
};

export default PokeCards;
