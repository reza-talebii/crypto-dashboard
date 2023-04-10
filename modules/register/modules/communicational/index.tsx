import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'

const CommunicationalInfo = () => {
  const {
    states: { RegisterData },
    handlers: { stepHandler },
  } = useRegisterCtx()
  const [FormControl] = useForm()
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  const onFinish = (values: any) => {
    console.log(values)
    stepHandler(Register_Steps.place)
  }

  useEffect(() => {
    if (!RegisterData?.email) return
    FormControl.setFieldsValue(RegisterData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisterData])

  return (
    <>
      <FormUi form={FormControl} className="steps_wrapper" onFinish={onFinish}>
        CommunicationalInfo
      </FormUi>
      <ActionsRegister disabled={disableBtn} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default CommunicationalInfo
