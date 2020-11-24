import { Card, Container } from "./style.js";

const CharacterCard = ({ charArr }) => {
  return (
    <Container>
      {charArr.map((char, idx) => (
        <div>
          <Card key={idx}>
            <img src={char.image} alt={"Imagem do perseonagem " + char.name} />
            <p>{char.name}</p>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default CharacterCard;
