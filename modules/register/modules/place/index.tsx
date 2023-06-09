import FormUi from '@/components/UI/Form'
import React, { Suspense, useEffect, useState } from 'react'
import ActionsRegister from '../../components/Actions'
import { useForm } from 'antd/lib/form/Form'
import InputUi from '@/components/UI/Input'
import { Col, Form, Row } from 'antd'
import { useRegisterCtx } from '../../context'
import { SelectUi } from '@/components/UI/Select'
import { BiMap, BiMapAlt } from 'react-icons/bi'
import ButtonUi from '@/components/UI/Button'
import { useGetCities } from '@/hook/data/useGetCities'
import { useGetProvinces } from '@/hook/data/useGetProvinces'
import { requiredFormRule } from '@/utils'
import { z } from 'zod'
import dynamic from 'next/dynamic'
import PreLoading from '@/components/PreLoading'
const MapModal = dynamic<any>(() => import('./components/MapModal').then(module => module), {
  ssr: false,
})

const formValueSchema = z.object({
  province: z.string(),
  city: z.string(),
  address: z.string(),
  lat: z.number(),
  lng: z.number(),
})
export type FormValuesPlaceInformation = z.infer<typeof formValueSchema>

const PlaceInformation = () => {
  const {
    states: { registerLoading, RegisterData },
    requests: { registerReq },
  } = useRegisterCtx()

  const provincesController = useGetProvinces()

  const [FormControl] = useForm()
  const provinceValue = Form.useWatch('province', FormControl)
  const cityValue = Form.useWatch('city', FormControl)
  const provinceId = provinceValue && provincesController?.data?.find(p => p.value == provinceValue)?.id

  const [showMap, setShowMap] = useState<boolean>(false)

  const citesController = useGetCities({ provinceId })

  const onFinish = async (values: FormValuesPlaceInformation) => {
    if (!formValueSchema.safeParse(values).success) {
      throw new Error('Invalid form data')
    }

    registerReq(values)
  }

  //clear city value when province change
  useEffect(() => {
    if (!cityValue) return

    FormControl.setFieldValue('city', undefined)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provinceValue])

  useEffect(() => {
    if (!RegisterData?.latLng) return

    FormControl.setFieldsValue(RegisterData.latLng)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisterData?.latLng])

  return (
    <>
      <FormUi form={FormControl} onFinish={onFinish}>
        <Row gutter={[12, 16]}>
          <Col md={12} span={24}>
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
          <Col md={12} span={24}>
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
          <Col md={12} span={24}>
            <Form.Item name={'lng'} rules={requiredFormRule}>
              <InputUi label="طول جغرافیایی" placeholder="36.7589" icon={<BiMap />} />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item name={'lat'} rules={requiredFormRule}>
              <InputUi label="عرض جغرافیایی" placeholder="64.5691" icon={<BiMap />} />
            </Form.Item>
          </Col>

          <ButtonUi onClick={() => setShowMap(true)} type="text" className="text-base  mx-auto font-black">
            انتخاب طول و عرض جغرافیایی از روی نقشه
          </ButtonUi>

          <Suspense fallback={<PreLoading />}>
            <MapModal visible={showMap} onClose={() => setShowMap(false)} />
          </Suspense>
        </Row>
      </FormUi>
      <ActionsRegister onSubmit={() => FormControl.submit()} loading={registerLoading} />
    </>
  )
}

export default PlaceInformation
