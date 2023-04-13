'use client'

import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm, useWatch } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Col, Form, Row } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'
import { GiSmartphone } from '@react-icons/all-files/Gi/GiSmartphone'
import { HiOutlineChatAlt } from '@react-icons/all-files/hi/HiOutlineChatAlt'
import { RiLockPasswordLine } from '@react-icons/all-files/ri/RiLockPasswordLine'
import { z } from 'zod'
import { confirmPasswordFormRule, emailFormRule, passwordFormRule, phoneNumberRule } from '@/utils'
import ButtonUi from '@/components/UI/Button'
import PhoneConfirmCode from './components/ConfirmCode'
import Validator from 'validator'

const formValueSchema = z.object({
  phoneNumber: z.string().length(11),
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
})

type FormValues = z.infer<typeof formValueSchema>

const CommunicationalInfo = () => {
  const [activeTimer, setActiveTimer] = React.useState<boolean>(false)

  const {
    states: { RegisterData },
    handlers: { stepHandler, setRegisterData },
  } = useRegisterCtx()

  const [FormControl] = useForm()
  const phoneNumberValue = useWatch('phoneNumber', FormControl)
  const passwordValue = useWatch('password', FormControl)

  const emailValue = useWatch('email', FormControl)

  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  const onFinish = (values: FormValues) => {
    if (!formValueSchema.safeParse(values).success) {
      throw new Error('Invalid form data')
    }

    setRegisterData(prev => ({ ...prev, ...values }))
    stepHandler(Register_Steps.place)
  }

  useEffect(() => {
    if (!RegisterData?.email) return
    FormControl.setFieldsValue(RegisterData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisterData])

  useEffect(() => {
    if (![phoneNumberValue, emailValue, passwordValue].every(Boolean)) {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }, [phoneNumberValue, emailValue, passwordValue])

  const onConfirmCode = (code: string) => {
    setRegisterData(prev => ({ ...prev, code }))
    setActiveTimer(false)
  }

  const PhoneInputExtra = () => {
    const disableSendCode = !Validator.isMobilePhone(phoneNumberValue || '', 'fa-IR')

    return (
      <ButtonUi disabled={disableSendCode} onClick={() => setActiveTimer(true)} type="text" size="small" className="!min-w-[60px] !text-sm">
        ارسال کد
      </ButtonUi>
    )
  }

  const showExtraCondition = !activeTimer && !RegisterData?.code

  const onFinishTimer = () => setActiveTimer(false)

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        <Form.Item name={'phoneNumber'} rules={phoneNumberRule}>
          <InputUi
            placeholder={'09112564798'}
            label="شماره تماس"
            icon={<GiSmartphone />}
            extra={showExtraCondition && <PhoneInputExtra />}
          />
        </Form.Item>
        {activeTimer && <PhoneConfirmCode onConfirm={onConfirmCode} phoneNumber={phoneNumberValue} onFinishTimer={onFinishTimer} />}
        <Form.Item name={'email'} rules={emailFormRule}>
          <InputUi placeholder={'example@mail.com'} label="ایمیل" icon={<HiOutlineChatAlt />} />
        </Form.Item>

        <Row gutter={[16, 16]}>
          <Col md={12} span={24}>
            <Form.Item name={'password'} rules={passwordFormRule}>
              <InputUi placeholder="********" label="رمز عبور" icon={<RiLockPasswordLine />} />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item name={'password_confirmation'} rules={confirmPasswordFormRule(passwordValue)}>
              <InputUi placeholder="********" label="تکرار رمز عبور" icon={<RiLockPasswordLine />} />
            </Form.Item>
          </Col>
        </Row>
      </FormUi>
      <ActionsRegister disabled={disableBtn || !!!RegisterData?.code} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default CommunicationalInfo
