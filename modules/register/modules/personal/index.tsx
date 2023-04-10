import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'
import { CgProfile } from '@react-icons/all-files/cg/CgProfile'
import { BsCreditCard } from '@react-icons/all-files/bs/BsCreditCard'
import { MdDateRange } from '@react-icons/all-files/md/MdDateRange'

const PersonalInfoForm = () => {
  const {
    states: { RegisterData },
    handlers: { stepHandler },
  } = useRegisterCtx()
  const [FormControl] = useForm()
  const [disableBtn, setDisableBtn] = React.useState<boolean>(true)

  const onFinish = (values: any) => {
    console.log(values)
    stepHandler(Register_Steps.communicational)
  }

  useEffect(() => {
    if (!RegisterData?.fullName) return
    FormControl.setFieldsValue(RegisterData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisterData])

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        <Form.Item name="fullName">
          <InputUi label="نام و نام خانوادگی" placeholder="رضا طالبی" icon={<CgProfile />} />
        </Form.Item>

        <Form.Item name={'nationalCode'}>
          <InputUi label="کد ملی" placeholder="208-1235-456" icon={<BsCreditCard />} />
        </Form.Item>
        <Form.Item name={'birthDay'}>
          <InputUi label="تاریخ تولد" placeholder="1370/06/31" icon={<MdDateRange />} />
        </Form.Item>
      </FormUi>
      <ActionsRegister disabled={disableBtn} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default PersonalInfoForm
