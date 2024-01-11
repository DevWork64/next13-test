"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  MailOutlined,
  SettingOutlined,
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
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  { type: "divider" },

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  { type: "divider" },

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

export const useNavBarStyles = () => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const btnPrefixCls = getPrefixCls("btn");
  const menuPrefixCls = getPrefixCls("menu");

  // Customize styles
  return createStyles(({ css }) => ({
    btn: css`
      background: red;
      .${btnPrefixCls}-icon {
        color: green;
      }
    `,
    menuLight: css`
      .${menuPrefixCls}-item-divider {
        border-color: red;
      }
    `,
    menuDark: css`
      .${menuPrefixCls}-dark {
        background: red;
      }
    `,
  }))();
};

export default function NavBar() {
  const isLightMode = useColorModeStore((state) => state.isLightMode);
  const setMode = useColorModeStore((state) => state.setMode);
  const { styles } = useNavBarStyles();
  const { button } = React.useContext(ConfigProvider.ConfigContext);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: "#0D1219",
          },
        },
      }}
      button={{ className: isLightMode ? styles.btn : button?.className }}
      menu={{ className: isLightMode ? styles.menuLight : styles.menuDark }}
    >
      <Sider
        className="sider"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
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
            theme={"dark"}
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
            className="navbar"
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
    </ConfigProvider>
  );
}
