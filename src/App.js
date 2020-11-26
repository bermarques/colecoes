import { Switch, Route } from "react-router-dom";
import RickAndMorty from "./pages/rickandmorty";
import Pokemons from "./pages/pokemons";
import FavoriteCharacters from "./pages/rickandmorty/favorites";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { useState } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <RickAndMorty fav={favorites} setFav={setFavorites} />
        </Route>
        <Route exact path="/favoriteram">
          <FavoriteCharacters fav={favorites} />
        </Route>
        <Route exact path="/pokemon">
          <Pokemons />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
