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
  height: 49px;
  min-width: 146px;

  * {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  &.ant-btn-default {
    border-color: ${props => props.theme.colors.primary} !important;
    background-color: transparent !important;
  }
  &.ant-btn-text {
    background-color: transparent !important;
    color: ${props => props.theme.colors.primary} !important;
    &:hover {
      background-color: ${props => props.theme.colors.primary}34 !important;
    }
  }
`
