import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Head = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Sider theme="light">
      <Menu
        style={{ width: 200, borderRight: 0 }}
        defaultSelectedKeys={location.pathname}
        mode="vertical"
      >
        <SubMenu
          title={" Rick And Morty"}
          key="sub1"
          icon={<FontAwesomeIcon icon={faReact} />}
        >
          <Menu.Item
            key="1"
            onClick={() => {
              history.push("/");
            }}
          >
            Lista de personagens
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              history.push("/favoriteram");
            }}
          >
            Favoritos
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="pokemon"
          icon={<FontAwesomeIcon icon={faDragon} />}
          title={" Pokémon"}
        >
          <Menu.Item
            key="3"
            onClick={() => {
              history.push("/pokemon/");
            }}
          >
            Lista de Pokémons
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => {
              history.push("/pokemon/");
            }}
          >
            Favoritos
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Head;
