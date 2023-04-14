'use client'

import '../styles/mapModal.css'

import ButtonUi from '@/components/UI/Button'
import { Modal, Space } from 'antd'
import dynamic from 'next/dynamic'
import React, { FC, Suspense } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useRegisterCtx } from '@/modules/register/context'
import { IPosition } from '@/modules/register/models/interfaces'
import 'leaflet/dist/leaflet.css'
const Map = dynamic<any>(() => import('../../../../../components/Map/Map').then(module => module), {
  ssr: false,
})

interface IProps {
  visible: boolean
  onClose: () => void
}

const defaultPosition = { lat: 36.566055565877306, lng: 53.0585789680481 }

const MapModal: FC<IProps> = ({ visible, onClose }) => {
  const {
    handlers,
    states: { RegisterData },
  } = useRegisterCtx()
  const [position, setPosition] = React.useState<IPosition>(RegisterData?.latLng || defaultPosition)

  const onSelectPosition = () => {
    handlers.setRegisterData(prev => ({ ...prev, latLng: position }))
    onClose()
  }

  const Footer = () => {
    return (
      <Space className="justify-between items-center mx-auto">
        <ButtonUi className="closeBtn" onClick={onClose}>
          بستن
        </ButtonUi>
        <ButtonUi className="submitBtn" onClick={onSelectPosition} icon={<BsArrowLeft />}>
          ثبت موقعیت
        </ButtonUi>
      </Space>
    )
  }

  return (
    <Modal centered open={visible} footer={<Footer />} closable={false} className="mapModal">
      <Map position={position} setPosition={setPosition} />
    </Modal>
  )
}

export default MapModal
