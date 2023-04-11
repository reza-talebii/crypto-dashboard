'use client'

import '../styles/mapModal.css'

import ButtonUi from '@/components/UI/Button'
import { Modal, Space } from 'antd'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft'

const Map = dynamic<any>(() => import('./Map').then(module => module), {
  ssr: false,
})

interface IProps {
  visible: boolean
  onClose: () => void
}

const MapModal: FC<IProps> = ({ visible, onClose }) => {
  const Footer = () => {
    return (
      <Space className="justify-between items-center mx-auto">
        <ButtonUi className="closeBtn" onClick={onClose}>
          بستن
        </ButtonUi>
        <ButtonUi className="submitBtn" onClick={onClose} icon={<BsArrowLeft />}>
          ثبت موقعیت
        </ButtonUi>
      </Space>
    )
  }

  return (
    <Modal centered open={visible} footer={<Footer />} closable={false} className="mapModal">
      <Map />
    </Modal>
  )
}

export default MapModal
