import { AutoComplete, AutoCompleteProps } from 'antd'
import React, { FC, useState } from 'react'

interface IProps extends AutoCompleteProps {
  onChange?: () => void
}

const AutoCompleteUi: FC<IProps> = ({ onChange, ...props }) => {
  const [value, setValue] = useState<string>()
  const [options, setOptions] = useState<{ value: string; label: string; key: string }[]>([])

  const handleSearch = (value: string) => {
    let res: { value: string; label: string; key: string }[] = []
    if (!value || value.indexOf('@') >= 0) {
      res = []
    } else {
      res = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].map(domain => ({
        value: `${value}@${domain}`,
        label: `${value}@${domain}`,
        key: crypto.randomUUID(),
      }))
    }

    setOptions(res)
  }

  return <AutoComplete onChange={onChange} options={options} onSearch={handleSearch} allowClear {...props} />
}

export default AutoCompleteUi
