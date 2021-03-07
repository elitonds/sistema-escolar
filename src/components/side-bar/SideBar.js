import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuList = [
    {
      name: "Principal",
      subMenus: [
        { name: "Home", path: "/" },
        { name: "Classroom", path: "/classroom" },
        { name: "Users", path: "/users" },
      ],
    },
  ];
  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onCollapse={collapsed}
        collapsedWidth="115px"
        breakpoint="lg"
      >
        {menuList &&
          menuList.map((menu, index) => {
            return (
              <SubMenu key={`menu-${index}`} title={menu.name}>
                {menu.subMenus &&
                  menu.subMenus.map((submenu, indexSub) => {
                    return (
                      <Menu.Item key={`menu-${indexSub}`}>
                        {submenu.name}
                        <Link to={submenu.path} />
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
      </Menu>
    </div>
  );
};

export default SideBar;
