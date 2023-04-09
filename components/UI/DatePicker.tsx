import { ConfigProvider } from 'antd'
import React, { FC } from 'react'
import fa_IR from 'antd/lib/locale/fa_IR'
import { JalaliLocaleListener } from 'antd-jalali'
import { DatePicker } from 'antd'

interface IProps {
  label?: string
  value?: any
  onChange?: () => void
}

const DatePickerUi: FC<IProps> = ({ label = 'بازه زمانی', value, onChange }) => {
  return (
    <ConfigProvider locale={fa_IR}>
      <JalaliLocaleListener />
      <DatePicker
        value={value}
        onChange={onChange}
        disabledDate={current => {
          return current.isAfter(value?.$d!)
        }}
      />
    </ConfigProvider>
  )
}

export default DatePickerUi
