import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'
import { useRegisterCtx } from '../../context'

const PlaceInformation = () => {
  const {
    states: { RegisterData },
  } = useRegisterCtx()

  const [FormControl] = useForm()
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        PlaceInformation
      </FormUi>
      <ActionsRegister disabled={disableBtn} onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default PlaceInformation
