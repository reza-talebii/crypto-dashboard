import { Dropdown, DropdownProps } from 'antd'
import React, { FC, ReactNode } from 'react'

interface IProps extends DropdownProps {
  children?: ReactNode
}

const DropdownUiKit: FC<IProps> = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>
}

export default DropdownUiKit
