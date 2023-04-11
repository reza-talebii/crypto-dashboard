import { FC } from 'react'
import { icons } from './icons-svg'

export type IconsNameType = keyof typeof icons

export const Icons: FC<{ name: IconsNameType }> = ({ name }) => {
  return icons[name]
}
