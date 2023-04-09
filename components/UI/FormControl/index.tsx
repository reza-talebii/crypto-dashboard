import React, { FC, ReactNode } from 'react'
import { FormControlContainer } from './styles'
import { Typography } from 'antd'

interface IProps {
  label?: string
  children: ReactNode
  height?: string
  icon?: ReactNode
  className?: string
}

const FormControlUiKit: FC<IProps> = ({ label, icon, children, height, className }) => {
  return (
    <FormControlContainer className={className} height={height}>
      <Typography.Text className="label">{label}</Typography.Text>

      <section className={`childrenContainer`}>
        {children}
        <span className="icon">{icon}</span>
        <fieldset>
          <legend>
            <Typography.Text>{label}</Typography.Text>
          </legend>
        </fieldset>
      </section>
    </FormControlContainer>
  )
}

export default FormControlUiKit
