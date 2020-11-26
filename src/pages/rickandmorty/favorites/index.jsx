import Head from "../../../components/header";
import CharactersCard from "../../../components/charactersCard";

const FavoriteCharacters = ({ fav }) => {
  return (
    <>
      <Head />
      <div>
        <CharactersCard arr={fav} />
      </div>
    </>
  );
};

export default FavoriteCharacters;
