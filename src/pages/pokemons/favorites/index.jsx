import Head from "../../../components/header";
import PokeCards from "./../cards";

const FavoritePokemons = ({ fav }) => {
  return (
    <>
      <Head />
      <PokeCards characters={fav} favButton={false} />
    </>
  );
};

export default FavoritePokemons;
