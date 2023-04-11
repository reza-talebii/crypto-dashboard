import React from 'react'
import { HeaderDashboard } from '../styles'
import { Avatar, Badge, Space } from 'antd'

import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward'
import { IoMdNotificationsOutline } from '@react-icons/all-files/io/IoMdNotificationsOutline'
import { useLayoutStore } from '@/layout/store'

const HeaderUi = () => {
  const { collapseSidebar, toggleCollapseSidebar } = useLayoutStore()

  return (
    <HeaderDashboard>
      {collapseSidebar ? (
        <IoIosArrowBack className="cursor-pointer" onClick={toggleCollapseSidebar} />
      ) : (
        <IoIosArrowForward className="cursor-pointer" onClick={toggleCollapseSidebar} />
      )}

      <section className="flex justify-center items-center gap-5">
        <Badge className="cursor-pointer" dot color="#29C57A">
          <IoMdNotificationsOutline size={20} />
        </Badge>
        <Avatar className="cursor-pointer" src="https://joesch.moe/api/v1/random?key=1" />
      </section>
    </HeaderDashboard>
  )
}

export default HeaderUi
