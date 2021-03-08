import { Card, Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Class, Home, Student, Users } from "..";
import { SideBar } from "../../components";
import { Main } from "./Style";

const MainContainer = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Main className="h-100 d-flex">
      <Layout>
        <Sider className="menu">
          <SideBar />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <div className="p-3">
                <Card style={{ width: "auto" }}>
                  <Route path="/student">
                    <Student />
                  </Route>
                  <Route path="/class">
                    <Class />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Card>
              </div>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Main>
  );
};

export default MainContainer;
