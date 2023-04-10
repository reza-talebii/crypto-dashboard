'use client'

import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm, useWatch } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'
import { GiSmartphone } from '@react-icons/all-files/Gi/GiSmartphone'
import { HiOutlineChatAlt } from '@react-icons/all-files/hi/HiOutlineChatAlt'
import { z } from 'zod'
import { emailFormRule, phoneNumberRule } from '@/utils'

const formValueSchema = z.object({
  phoneNumber: z.string().length(11),
  email: z.string().email(),
  // code: z.string().length(4),
})

type FormValues = z.infer<typeof formValueSchema>

const CommunicationalInfo = () => {
  const {
    states: { RegisterData },
    handlers: { stepHandler, setRegisterData },
  } = useRegisterCtx()

  const [FormControl] = useForm()
  const phoneNumberValue = useWatch('phoneNumber', FormControl)
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
    if (![phoneNumberValue, emailValue].every(Boolean)) {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }, [phoneNumberValue, emailValue])

  return (
    <>
      <FormUi form={FormControl} className="steps_wrapper" onFinish={onFinish}>
        <Form.Item name={'phoneNumber'} rules={phoneNumberRule}>
          <InputUi placeholder={'09112564798'} label="شماره تماس" icon={<GiSmartphone />} />
        </Form.Item>
        <Form.Item name={'email'} rules={emailFormRule}>
          <InputUi placeholder={'example@mail.com'} label="ایمیل" icon={<HiOutlineChatAlt />} />
        </Form.Item>
      </FormUi>
      <ActionsRegister disabled={disableBtn} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default CommunicationalInfo
