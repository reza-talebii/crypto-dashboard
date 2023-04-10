import { Steps } from 'antd'
import { styled } from 'styled-components'

export const StepsRegisterStyled = styled(Steps)`
  gap: 1.5rem;

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
    background-color: transparent;
    border: 1px solid #ffffff;
    top: 37px !important;
    height: 0% !important;
    padding: 22px 0 7px !important;
  }

  .ant-steps-item .ant-steps-item-icon {
    background: #9cc4f2;
  }
  .ant-steps-item-active .ant-steps-item-icon {
    border: 3px solid #ffffff;
  }
`
