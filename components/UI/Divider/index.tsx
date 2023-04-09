import { DividerProps } from 'antd'
import { FC } from 'react'
import { DividerContainer } from './styles'

export const DividerUiKit: FC<DividerProps> = props => {
  return <DividerContainer {...props} />
}
