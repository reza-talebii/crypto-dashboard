'use client'

import { InputProps } from 'antd'
import React, { FC, ReactNode } from 'react'
import { InputUiKitContainer } from './styles/Container'
import FormControlUiKit from '../FormControl'

interface IProps extends InputProps {
  label?: string
  icon?: ReactNode
  wrapperClassName?: string
  extra?: ReactNode | string
}

const InputUi: FC<IProps> = ({ label, icon, extra, wrapperClassName, ...props }) => {
  return (
    <FormControlUiKit label={label} className={wrapperClassName} icon={icon} extra={extra}>
      <InputUiKitContainer {...props} />
    </FormControlUiKit>
  )
}

export default InputUi
