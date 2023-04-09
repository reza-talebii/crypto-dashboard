import { Button } from 'antd'
import React, { FC, ReactNode } from 'react'
import { ButtonUiKitStyled } from './styles'
import { ButtonProps } from 'antd/lib/button'
import useGlobalStore from 'store/global'
import { ILanguage } from 'models/types'
export type ButtonOtherType = 'secondary'
interface IProps extends ButtonProps {
  children?: ReactNode
  othertype?: ButtonOtherType
  lang?: ILanguage
}

const ButtonUiKit: FC<IProps> = ({ children, ...props }) => {
  const { lang } = useGlobalStore()

  if (props.othertype) {
    props.type = 'primary'
  }

  return (
    <ButtonUiKitStyled lang={lang || 'fa'} {...props}>
      {children}
    </ButtonUiKitStyled>
  )
}

export default ButtonUiKit
