"use client";

import React, { useEffect, useState } from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import { useColorModeStore } from "@/app/store/colorModeStore";
import { ConfigProvider } from "antd";
import { extractStyle as extractStyle2 } from "@ant-design/static-style-extract";

const cssText = extractStyle2((node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "green ",
        },
      }}
    >
      {node}
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "blue",
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "red ",
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
));

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (typeof window !== "undefined") {
    window.onload = () => {
      document.getElementById("holderStyle")!.remove();
    };
  }
  const cache = createCache();
  console.log(cache);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{
        __html:
          `
      *, *::before, *::after {
          transition: 0.2s !important;
      }
      ` + extractStyle(cache, true),
      }}
    />
  ));
  return (
    <div style={{ visibility: !mounted ? "hidden" : "visible" }}>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </div>
  );
};

export default StyledComponentsRegistry;
