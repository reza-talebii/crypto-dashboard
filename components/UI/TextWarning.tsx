import { Typography } from 'antd'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const { Text } = Typography

const Style = styled(Text)`
  color: ${props => props.theme.colors.warning} !important;
  margin: 5px 0;
  font-size: 12px;
  line-height: 17px;
`

const TextWarning: FC<{ children: ReactNode }> = ({ children }) => {
  return <Style>{children}</Style>
}

export default TextWarning
