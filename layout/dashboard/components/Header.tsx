import React from 'react'
import { HeaderDashboard } from '../styles'
import { Avatar, Badge, Typography } from 'antd'

import { IoIosArrowBack, IoIosArrowForward, IoMdNotificationsOutline } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { useLayoutStore } from '@/layout/store'
import { useGetSession } from '@/hook'
import { useMediaQuery } from '@/hook/screen/useMediaQuery '

const HeaderUi = () => {
  const isDesktop = useMediaQuery(768)
  const { collapseSidebar, toggleCollapseSidebar, toggleOpenMenu } = useLayoutStore()
  const { user } = useGetSession()

  const renderIconMenu = isDesktop ? (
    collapseSidebar ? (
      <IoIosArrowBack className="cursor-pointer" onClick={toggleCollapseSidebar} />
    ) : (
      <IoIosArrowForward className="cursor-pointer" onClick={toggleCollapseSidebar} />
    )
  ) : (
    <FiMenu className="cursor-pointer" onClick={toggleOpenMenu} />
  )

  return (
    <HeaderDashboard>
      {renderIconMenu}
      <section className="flex justify-center items-center gap-5">
        <Badge className="cursor-pointer" dot color="#29C57A">
          <IoMdNotificationsOutline size={20} />
        </Badge>
        <Avatar className="cursor-pointer" src="https://joesch.moe/api/v1/random?key=1" />
        <Typography.Text className="font-semibold">{user?.name}</Typography.Text>
      </section>
    </HeaderDashboard>
  )
}

export default HeaderUi
