import Head from "../../../components/header";
import CharactersCard from "../../../components/charactersCard";

const FavoriteCharacters = ({ fav }) => {
  return (
    <>
      <Head />
      <div>
        <CharactersCard arr={fav} favButton={false} />
      </div>
    </>
  );
};

export default FavoriteCharacters;
