import { Input, InputProps, Typography } from 'antd'
import React, { FC, ReactNode } from 'react'
import { InputUiKitContainer } from './styles/Container'
import FormControlUiKit from '../FormControl'

interface IProps extends InputProps {
  label?: string
  icon?: ReactNode
}

const InputUiKit: FC<IProps> = ({ label, icon, ...props }) => {
  return (
    <FormControlUiKit label={label} height={'45px'} icon={icon}>
      <InputUiKitContainer autoComplete="off" {...props} defaultValue={''} />
    </FormControlUiKit>
  )
}

export default InputUiKit
