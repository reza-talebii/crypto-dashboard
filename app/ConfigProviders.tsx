"use client";

import { GlobalStyle } from "@/styles/global.style";
import styledComponentsTheme from "@/styles/theme/styledComponent";
import { ConfigProvider } from "antd";
import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { antdThemeComponents, antdThemeToken } from "@/styles/theme";

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const antdTheme = {
    token: antdThemeToken,
    components: antdThemeComponents,
  };
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={styledComponentsTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default ConfigProviders;
