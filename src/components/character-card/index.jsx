import { Card, Container } from "./style.js";

const CharacterCard = ({ charArr }) => {
  return (
    <Container>
      {charArr.map((char, idx) => (
        <Card key={idx}>
          <img src={char.image} alt={"Imagem do personagem " + char.name} />
          <p>{char.name}</p>
        </Card>
      ))}
    </Container>
  );
};

export default CharacterCard;
