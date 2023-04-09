import React, { FC } from 'react'
import { Props as inputProps } from 'react-input-mask'
import { InputUiMaskStyled } from './styled'

interface IProps extends Omit<inputProps, 'mask'> {
  mask?: string
  haserror?: boolean
  value?: string
}

const InputMuskUi: FC<IProps> = ({ mask = '9 9 9 9 9 9', haserror, ...props }) => {
  return <InputUiMaskStyled mask={mask} alwaysShowMask dir="ltr" {...props} haserror={haserror?.toString()} />
}

export default InputMuskUi
