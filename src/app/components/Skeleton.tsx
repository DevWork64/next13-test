import { Layout } from "antd";
import React from "react";
import NavBar from "./NavBar";

const { Header, Content, Footer, Sider } = Layout;

export default function Skeleton(props: { children: React.ReactNode }) {
  return (
    <Layout hasSider>
      <NavBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        {props.children}
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
