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

  const menuList = [
    {
      name: "Classroom",
      subMenus: [
        { name: "Student", path: "/student" },
      ],
    },
  ];
  return (
    <div style={{ width: 256 }}>
      <Menu
        mode="inline"
        theme="dark"
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
