import FormUi from '@/components/UI/Form'
import React, { useEffect } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Col, Form, Row } from 'antd'
import { useRegisterCtx } from '../../context'
import { SelectUi } from '@/components/UI/Select'
import { BiMap } from '@react-icons/all-files/bi/BiMap'
import { BiMapAlt } from '@react-icons/all-files/bi/BiMapAlt'
import ButtonUi from '@/components/UI/Button'
import { useGetCities } from '@/hook/useGetCities'
import { useGetProvinces } from '@/hook/useGetProvinces'
import { requiredFormRule } from '@/utils'

const PlaceInformation = () => {
  const {
    states: { RegisterData },
  } = useRegisterCtx()

  const provincesController = useGetProvinces()

  const [FormControl] = useForm()
  const provinceValue = Form.useWatch('province', FormControl)
  const cityValue = Form.useWatch('city', FormControl)
  const provinceId = provinceValue && provincesController?.data?.find(p => p.value == provinceValue)?.id

  const citesController = useGetCities({ provinceId })

  const onFinish = async (values: any) => {
    console.log(values)
  }

  //clear city value when province change
  useEffect(() => {
    if (!cityValue) return

    FormControl.setFieldValue('city', undefined)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provinceValue])

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        <Row gutter={[12, 16]}>
          <Col span={12}>
            <Form.Item name={'province'} rules={requiredFormRule}>
              <SelectUi
                label="استان"
                placeholder="مازندران"
                icon={<BiMap />}
                options={provincesController.data}
                loading={provincesController.isLoading}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'city'} rules={requiredFormRule}>
              <SelectUi
                label="شهر"
                placeholder="ساری"
                icon={<BiMap />}
                options={citesController.data}
                loading={citesController.isLoading}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name={'address'} rules={requiredFormRule}>
              <InputUi label="آدرس" placeholder="ایران مازندران ساری" icon={<BiMapAlt />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'lat'} rules={requiredFormRule}>
              <InputUi label="طول جغرافیایی" placeholder="36.7589" icon={<BiMap />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'lng'} rules={requiredFormRule}>
              <InputUi label="عرض جغرافیایی" placeholder="64.5691" icon={<BiMap />} />
            </Form.Item>
          </Col>

          <ButtonUi type="text" className="text-base  mx-auto font-black">
            انتخاب طول و عرض جغرافیایی از روی نقشه
          </ButtonUi>
        </Row>
      </FormUi>
      <ActionsRegister onSubmit={() => FormControl.submit()} />
    </>
  )
}

export default PlaceInformation
