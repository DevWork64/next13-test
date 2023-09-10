"use client";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { customTheme } from "@/theme/themeConfig";
import { Button, ConfigProvider, Switch } from "antd";
import { createStyles } from "antd-style";
import { Inter } from "next/font/google";
import { default as React, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
// import { useButtonStyle } from "./components/NavBar";
import "./globals.css";
import { useColorModeStore } from "./store/colorModeStore";

const inter = Inter({ subsets: ["latin"] });

const useButtonStyle = () => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const btnPrefixCls = getPrefixCls("btn");

  // Customize styles
  return createStyles(({ css }) => ({
    btn: css`
      background: red !important;
      .${btnPrefixCls}-icon {
        color: green;
      }
    `,
  }))();
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { styles } = useButtonStyle();
  const isLightMode = useColorModeStore((state) => state.isLightMode);
  const [isHydrated, setIsHydrated] = useState(false);

  console.log(isLightMode);
  const setMode = useColorModeStore((state) => state.setMode);

  useEffect(() => {
    useColorModeStore.persist.rehydrate();
    setIsHydrated(true);
  }, []);

  const { button } = React.useContext(ConfigProvider.ConfigContext);

  return (
    <html lang="en">
      <ConfigProvider
        theme={customTheme}
        button={{ className: isLightMode ? styles.btn : button?.className }}
      >
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {isHydrated ? (
              <>
                <Switch
                  onChange={() => setMode()}
                  checked={isLightMode === true ? true : false}
                />
                {/* <NavBar /> */}
                <Button type="primary">test</Button>
                <Button type="dashed">sdfds</Button>
                <Button onClick={() => console.log(isLightMode)}>
                  check mode
                </Button>
              </>
            ) : null}
          </StyledComponentsRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
