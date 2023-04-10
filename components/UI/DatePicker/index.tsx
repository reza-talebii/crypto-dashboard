'use client'

import { ConfigProvider } from 'antd'
import React, { FC, ReactNode } from 'react'
import fa_IR from 'antd/lib/locale/fa_IR'
import { JalaliLocaleListener } from 'antd-jalali'
import FormControlUiKit from '../FormControl'
import { DatePickerStyled } from './styled'

interface IProps {
  label?: string
  placeholder?: string
  value?: any
  onChange?: () => void
  icon?: ReactNode
}

const DatePickerUi: FC<IProps> = ({ value, onChange, label, icon, placeholder }) => {
  return (
    <ConfigProvider locale={fa_IR}>
      <JalaliLocaleListener />
      <FormControlUiKit label={label} icon={icon}>
        <DatePickerStyled
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabledDate={current => {
            return current.isAfter(value?.$d!)
          }}
        />
      </FormControlUiKit>
    </ConfigProvider>
  )
}

export default DatePickerUi
