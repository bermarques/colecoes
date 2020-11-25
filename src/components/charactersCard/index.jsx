import { Card } from "antd";
import { Body } from "./style";

const { Meta } = Card;

const CharactersCard = ({ arr }) => {
  return (
    <Body>
      {arr.map((card, idx) => (
        <Card
          key={idx}
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt={"Imagem do personagem " + card.name} src={card.image} />
          }
        >
          <Meta title={card.name} />
        </Card>
      ))}
    </Body>
  );
};

export default CharactersCard;
