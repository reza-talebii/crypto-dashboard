'use client'

import React, { FC, ReactNode } from 'react'
import { FormControlContainer } from './styles'
import { Typography } from 'antd'

interface IProps {
  label?: string
  children: ReactNode
  height?: string
  icon?: ReactNode
  className?: string
  childrenContainerClassName?: string
  extra?: ReactNode | string
}

const FormControlUiKit: FC<IProps> = ({ label, icon, children, height = '60px', className, childrenContainerClassName, extra }) => {
  return (
    <FormControlContainer className={className} height={height}>
      <Typography.Text className="label">{label}</Typography.Text>

      <section className={`childrenContainer ${childrenContainerClassName}`}>
        <span className="icon">{icon}</span>
        {children}
        {extra}
      </section>
    </FormControlContainer>
  )
}

export default FormControlUiKit
