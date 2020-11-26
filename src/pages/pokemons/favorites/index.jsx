import Head from "../../../components/header";
import PokeCards from "./../cards";

const FavoritePokemons = ({ fav }) => {
  return (
    <>
      <Head />
      <PokeCards characters={fav} />
    </>
  );
};

export default FavoritePokemons;
