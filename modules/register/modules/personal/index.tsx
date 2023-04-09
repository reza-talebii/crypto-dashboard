import FormUi from '@/components/UI/Form'
import React from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'

const PersonalInfoForm = () => {
  const {
    handlers: { stepHandler },
  } = useRegisterCtx()
  const [FormControl] = useForm()
  const [disableBtn, setDisableBtn] = React.useState<boolean>(true)

  const onFinish = (values: any) => {
    console.log(values)
    stepHandler(Register_Steps.communicational)
  }

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        <Form.Item name="fullName">
          <InputUi label="نام و نام خانوادگی" placeholder="رضا طالبی" />
        </Form.Item>

        <Form.Item name={'nationalCode'}>
          <InputUi label="کد ملی" placeholder="208-1235-456" />
        </Form.Item>
        <Form.Item name={'birthDay'}>
          <InputUi label="تاریخ تولد" placeholder="1370/06/31" />
        </Form.Item>
      </FormUi>
      <ActionsRegister disabled={disableBtn} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default PersonalInfoForm
