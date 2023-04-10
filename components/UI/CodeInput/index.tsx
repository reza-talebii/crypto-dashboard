'use client'

import React, { FC } from 'react'
import ReactCodeInput, { ReactCodeInputProps } from 'react-code-input'

const CodeInputUi: FC<Omit<ReactCodeInputProps, 'inputMode'>> = ({ ...props }) => {
  return <ReactCodeInput {...props} autoFocus inputMode="email" type="number" />
}

export default CodeInputUi
