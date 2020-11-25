import { Switch, Route } from "react-router-dom";
import RickAndMorty from "./pages/rickandmorty";
import "antd/dist/antd.css";
import { Layout } from "antd";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <RickAndMorty />
        </Route>
        <Route exact path="/pokemon"></Route>
      </Switch>
    </Layout>
  );
};

export default App;
