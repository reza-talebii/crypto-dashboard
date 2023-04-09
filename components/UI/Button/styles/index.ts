import { Button } from 'antd'
import styled from 'styled-components'
import { ButtonOtherType } from '..'
import { ILanguage } from 'models/types'

export const ButtonUiKitStyled = styled(Button)<{ othertype?: ButtonOtherType; lang: ILanguage }>`
  padding: 0px 24px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.75 !important;
  }
  ${({ othertype, disabled }) => {
    if (othertype) {
      switch (othertype) {
        case 'secondary':
          return `
          background-color: #4A4B4F!important;
          ${
            disabled &&
            `
            border-color: #4A4B4F !important;
            color:#d3d3d370 !important;
          `
          }
          
          `
        default:
          return ''
      }
    }
  }}

  .material-icons {
    font-size: 15px;
    ${props => (props.lang === `fa` ? `margin-left: 10px;` : `margin-right: 10px;`)}
  }
`
