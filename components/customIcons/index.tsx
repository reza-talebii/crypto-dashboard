import { FC } from 'react'
import { icons } from './icons-svg'
import { IconsNameType } from './iconsName'

export const Icons: FC<{ name: IconsNameType }> = ({ name }) => {
  return icons[name]
}
