"use client";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import React, { useEffect, useState } from "react";

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
