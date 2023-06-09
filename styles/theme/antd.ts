import { AliasToken, OverrideToken } from 'antd/es/theme/interface'

export const antdThemeToken: Partial<AliasToken> = {
  colorPrimary: '#388AEA',
  colorWarning: '#EC8A2A',
  colorError: '#EA3838',
  colorSuccess: '#49AA19',
  colorLink: '#177DDC',
  colorTextDisabled: '#BFBFBF',
  colorBgBase: '#F5F5F5',
  colorBorder: '#D9D9D9',
  colorText: '#112211',
}

export const antdThemeComponents: OverrideToken = {
  Button: {
    colorBgContainerDisabled: '#CECECE',
    colorTextDisabled: '#fff',
    colorText: '#fff',
    colorPrimaryText: '#fff',
    borderRadius: 16,
  },
  Select: {
    colorBgContainer: 'transparent',
  },
  Divider: {
    colorTextDescription: '#afafaf',
    colorTextLabel: '#afafaf',
    fontSize: 14,
  },
}
