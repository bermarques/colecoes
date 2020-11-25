import { Card, Col, Row } from "antd";

const { Meta } = Card;

const CharactersCard = ({ arr }) => {
  return (
    <div className="site-card-wrapper">
      <Row>
        {arr.map((card, idx) => (
          <Col span={5}>
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CharactersCard;
