import FormUi from '@/components/UI/Form'
import React from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'
import { Register_Steps } from '../../models'

const CommunicationalInfo = () => {
  const {
    handlers: { stepHandler },
  } = useRegisterCtx()
  const [FormControl] = useForm()
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  const onFinish = (values: any) => {
    console.log(values)
    stepHandler(Register_Steps.place)
  }

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
