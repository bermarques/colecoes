import { useHistory, useLocation } from "react-router-dom";
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
          Rick And Morty
        </Menu.Item>
        <Menu.Item
          key="pokemon"
          onClick={() => {
            history.push("/pokemon");
          }}
        >
          Pokémon
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Head;
