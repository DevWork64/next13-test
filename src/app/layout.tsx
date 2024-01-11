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
  const isLightMode = useColorModeStore((state) => state.isLightMode);
  const [isHydrated, setIsHydrated] = useState(false);

  const setMode = useColorModeStore((state) => state.setMode);

  useEffect(() => {
    useColorModeStore.persist.rehydrate();
    setIsHydrated(true);
  }, []);

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
