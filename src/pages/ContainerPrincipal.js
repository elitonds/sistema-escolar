import { Layout } from "antd";
import React from "react";
import { SideBar } from "../components";

const ContainerPrincipal = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default ContainerPrincipal;
