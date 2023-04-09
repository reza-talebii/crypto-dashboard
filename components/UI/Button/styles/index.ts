import { Button } from 'antd'
import styled from 'styled-components'

export const ButtonUiStyled = styled(Button)`
  svg {
    width: 23px;
    height: 23px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 16px;

  &.ant-btn-default {
    border-color: ${props => props.theme.colors.primary} !important;
    background: transparent;
  }
`
