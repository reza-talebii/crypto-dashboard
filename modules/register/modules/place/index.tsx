import FormUi from '@/components/UI/Form'
import React from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Form } from 'antd'

const PlaceInformation = () => {
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
