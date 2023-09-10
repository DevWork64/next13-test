"use client";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { customTheme } from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import { default as React, useEffect, useState } from "react";
import { useNavBarStyles } from "./components/NavBar";
import Skeleton from "./components/Skeleton";
// import { useButtonStyle } from "./components/NavBar";
import "./globals.css";
import { useColorModeStore } from "./store/colorModeStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: { children: React.ReactNode }) {
  const { styles } = useNavBarStyles();
  const isLightMode = useColorModeStore((state) => state.isLightMode);
  const [isHydrated, setIsHydrated] = useState(false);

  console.log(isLightMode);
  const setMode = useColorModeStore((state) => state.setMode);

  useEffect(() => {
    useColorModeStore.persist.rehydrate();
    setIsHydrated(true);
  }, []);

  const { button } = React.useContext(ConfigProvider.ConfigContext);
  const { menu } = React.useContext(ConfigProvider.ConfigContext);

  return (
    <html lang="en">
      <ConfigProvider theme={customTheme}>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {isHydrated ? (
              <>
                <Skeleton>{props.children}</Skeleton>
              </>
            ) : null}
          </StyledComponentsRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
