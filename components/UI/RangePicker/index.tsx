import { ConfigProvider } from 'antd'
import React, { FC } from 'react'
import fa_IR from 'antd/lib/locale/fa_IR'
import { JalaliLocaleListener } from 'antd-jalali'
import { RangePickerStyled } from './styles'
import FormControlUiKit from '../FormControl'

interface IProps {
  label?: string
  value?: any
  onChange?: () => void
}

const RangePickerUi: FC<IProps> = ({ label = 'بازه زمانی', value, onChange }) => {
  return (
    <ConfigProvider locale={fa_IR}>
      <JalaliLocaleListener />
      <FormControlUiKit label={label} height={'45px'}>
        <RangePickerStyled
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

export default RangePickerUi
