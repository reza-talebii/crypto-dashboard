import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputUiMaskStyled = styled(InputMask)<{ haserror?: string }>`
  color: ${props => props.theme.colors.text.white};
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  gap: 8px;
  border: 1px solid ${props => props.theme.colors.border}30;
  border-radius: 8px;
  letter-spacing: 5px;
  text-align: center;
  transition: all 0.3s;
  &:focus-visible {
    outline: unset !important;
  }
  &:focus {
    border: 1px solid
      ${({ haserror, theme }) => {
        return haserror === 'true' ? theme.colors.danger : theme.colors.primary
      }} !important;
    box-shadow: ${({ haserror, theme }) => (haserror === 'true' ? theme.colors.danger : theme.colors.success)}10 0px 5px 15px;
  }
`
