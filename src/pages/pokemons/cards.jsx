import { Card } from "antd";
import { Body } from "../../components/charactersCard/style";
import { motion } from "framer-motion";
const { Meta } = Card;

const PokeCards = ({ characters, fav, setFav }) => {
  const getCard = (evt) => {
    const card = evt.currentTarget.children[0].children[0];
    setFav([...fav, { name: card.alt, image: card.src }]);
    console.log(fav);
  };

  return (
    <Body>
      {characters.map(({ name }, index) => (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Card
            onClick={getCard}
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
  );
};

export default PokeCards;
