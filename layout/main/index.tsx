'use client'

import React, { FC } from 'react'
import { MainLayoutStyled } from './styles'
import { IChildrenProps } from '@/models/interfaces'

const MainLayout: FC<IChildrenProps> = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>
}

export default MainLayout
