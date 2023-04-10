import { Steps } from 'antd'
import { styled } from 'styled-components'

export const StepsRegisterStyled = styled(Steps)`
  gap: 1rem;

  .ant-steps-item-title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 31px;
    color: #ffffff !important;
  }

  .ant-steps-icon {
    display: none;
  }

  .ant-steps-item-tail {
    background-color: #ffffff;
  }
`
