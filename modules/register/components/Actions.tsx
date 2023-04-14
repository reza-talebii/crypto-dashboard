'use client'

import ButtonUi from '@/components/UI/Button'
import { Col, Divider, Row } from 'antd'
import React, { FC, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useRegisterCtx } from '../context'
import { Register_Steps, ValueOfRegister_Steps } from '../models'

interface IProps {
  disabled?: boolean
  onSubmit?: () => void
  loading?: boolean
}

const ActionsRegister: FC<IProps> = ({ disabled, onSubmit, loading }) => {
  const {
    states: { activeStep },
    handlers: { stepHandler },
  } = useRegisterCtx()

  const isLastStep = activeStep === Register_Steps.place
  const isFirstStep = activeStep === Register_Steps.personal
  const nextBtnText = isLastStep ? 'ثبت نام' : 'مرحله بعد'
  // @ts-ignore
  const onBack = () => stepHandler(prev => (prev - 1) as ValueOfRegister_Steps)

  return (
    <section>
      <Divider />

      <Row justify={'space-between'}>
        <Col span={12} className="text-right">
          {!isFirstStep && (
            <ButtonUi onClick={onBack} type="text">
              مرحله قبل
            </ButtonUi>
          )}
        </Col>
        <ButtonUi disabled={disabled} onClick={onSubmit} icon={<BsArrowLeft />} loading={loading}>
          {nextBtnText}
        </ButtonUi>
      </Row>
    </section>
  )
}

export default ActionsRegister
