import { styled } from 'styled-components'
import { DatePicker } from 'antd'

export const DatePickerStyled = styled(DatePicker)`
  background-color: transparent !important;
  border: none !important;
  margin-top: 0 !important;
  height: 100% !important;
  width: 100%;
  box-shadow: none;

  input::placeholder {
    color: #d6d6d6 !important;
  }
`
