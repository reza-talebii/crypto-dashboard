import ButtonUi from '@/components/UI/Button'
import { Col, Divider, Row, Space } from 'antd'
import React from 'react'
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft'

const ActionsRegister = () => {
  return (
    <section>
      <Divider />

      <Row justify={'space-between'}>
        <ButtonUi type="text">مرحله قبل</ButtonUi>
        <ButtonUi icon={<BsArrowLeft />}>مرحله بعد</ButtonUi>
      </Row>
    </section>
  )
}

export default ActionsRegister
