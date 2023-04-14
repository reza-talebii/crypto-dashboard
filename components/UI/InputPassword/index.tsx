'use client'

import { Input, InputProps } from 'antd'
import React, { FC, ReactNode } from 'react'
import FormControlUiKit from '../FormControl'
import { InputPasswordStyled } from './styles'

interface IProps extends Omit<InputProps, 'icon'> {
  label?: string
  icon?: ReactNode
}

const InputPassword: FC<IProps> = ({ label, icon, ...props }) => {
  return (
    <FormControlUiKit label={label} icon={icon}>
      <InputPasswordStyled {...props} />
    </FormControlUiKit>
  )
}

export default InputPassword
