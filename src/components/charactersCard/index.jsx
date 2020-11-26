import { Card } from "antd";
import { Body } from "./style";
import { motion } from "framer-motion";
const { Meta } = Card;

const CharactersCard = ({ arr }) => {
  return (
    <Body>
      {arr.map((card, idx) => {
        return (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Card
              key={idx}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt={"Imagem do personagem " + card.name}
                  src={card.image}
                />
              }
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
