"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  ConfigProvider,
  Divider,
  Layout,
  Menu,
  MenuProps,
  Space,
  Switch,
} from "antd";
import { createStyles } from "antd-style";
import React from "react";
import { useColorModeStore } from "../store/colorModeStore";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export const useButtonStyle = () => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const btnPrefixCls = getPrefixCls("btn");

  // Customize styles
  return createStyles(({ css }) => ({
    btn: css`
      background: red;
      .${btnPrefixCls}-icon {
        color: green;
      }
    `,
  }))();
};

export default function NavBar() {
  const isLightMode = useColorModeStore((state) => state.isLightMode);
  const setMode = useColorModeStore((state) => state.setMode);
  return (
    <Sider
      className="sider"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        background: "#0D1219 !important",
      }}
    >
      <div style={{ margin: "auto", width: "90%", marginTop: 15 }}>
        <div
          className="demo-logo-vertical"
          style={{
            background: "grey",
            height: 30,
            borderRadius: 6,
          }}
        />
        <Menu
          theme={isLightMode ? "light" : "dark"}
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          style={{ background: "#0D1219" }}
        />
        <Divider style={{ border: "1px solid #ffffff1c !important" }} />
        <div style={{ paddingLeft: 24 }}>
          <Space>
            Dark
            <Switch
              onChange={() => setMode()}
              checked={isLightMode ? true : false}
            />
            Light
          </Space>
        </div>
      </div>
    </Sider>
  );
}
