import { Card } from "antd";
import { Body } from "./style";

const { Meta } = Card;

const CharactersCard = ({ arr, id }) => {
  return (
    <Body>
      {arr.map((card, idx) => {
        const brokenUrl = card.url.split("/");
        const id = brokenUrl[brokenUrl.length - 2];

        return (
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
        );
      })}
    </Body>
  );
};

export default CharactersCard;
