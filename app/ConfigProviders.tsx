'use client'

import { GlobalStyle } from '@/styles/global.style'
import { antdThemeComponents, antdThemeToken } from '@/styles/theme'
import styledComponentsTheme from '@/styles/theme/styledComponent'
import { ConfigProvider } from 'antd'
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StyledComponentsRegistry from '@/lib/registry'
import fa_IR from 'antd/locale/fa_IR'

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const antdTheme = {
    token: antdThemeToken,
    components: antdThemeComponents,
  }
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdTheme} direction="rtl" locale={fa_IR}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={styledComponentsTheme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default ConfigProviders
