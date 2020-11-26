import { Card } from "antd";
import { Body } from "../../components/charactersCard/style";
import { motion } from "framer-motion";
const { Meta } = Card;

const PokeCards = ({ characters }) => {
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
          </Card>
        </motion.button>
      ))}
    </Body>
  );
};

export default PokeCards;
