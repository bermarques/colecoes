import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Head = () => {
  return (
    <Sider theme="light">
      <Menu style={{ width: 200, borderRight: 0 }} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Rick And Morty</Menu.Item>
        <Menu.Item key="2">Pokémon</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Head;
