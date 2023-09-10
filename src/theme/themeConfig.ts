// theme/themeConfig.ts

import { useColorModeStore } from '@/app/store/colorModeStore';
import { ConfigProvider, theme, ThemeConfig } from 'antd';
import { createStyles } from 'antd-style';
import { Inter } from "next/font/google";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });



export const customTheme: ThemeConfig = {
  token: {
    fontFamily: inter.style.fontFamily,
  },
  
  
};
