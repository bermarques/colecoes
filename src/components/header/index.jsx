import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Head = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Sider theme="light">
      <Menu
        style={{ width: 200, borderRight: 0 }}
        defaultSelectedKeys={location.pathname}
      >
        <Menu.Item
          key="1"
          onClick={() => {
            history.push("/");
          }}
        >
          <FontAwesomeIcon icon={faReact} /> &nbsp; Rick And Morty
        </Menu.Item>
        <Menu.Item
          key="pokemon"
          onClick={() => {
            history.push("/pokemon");
          }}
        >
          <FontAwesomeIcon icon={faDragon} /> &nbsp; Pokémon
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Head;
