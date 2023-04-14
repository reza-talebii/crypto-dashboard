'use client'

import { Typography } from 'antd'
import React, { FC } from 'react'
import { styled } from 'styled-components'

import { FaClipboard } from 'react-icons/fa'
import ButtonUi from '@/components/UI/Button'
import CodeInputUi from '@/components/UI/CodeInput'
import CountdownUi from '@/components/UI/Countdown'

const Styles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  text-align: center;

  .alert {
    max-width: 579px;
    min-height: 64px;
    background: #e8f4ff;
    border-radius: 51px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 1rem;
  }
`

interface IProps {
  phoneNumber: string
  onConfirm: (code: string) => void
  onFinishTimer: () => void
}

const PhoneConfirmCode: FC<IProps> = ({ onConfirm, phoneNumber, onFinishTimer }) => {
  const [codeValue, setCodeValue] = React.useState<string | undefined>()

  return (
    <Styles>
      <section className="alert">
        <FaClipboard color="#388AEA" />
        <Typography.Text className="font-semibold">
          کد تائید به شماره {phoneNumber} ارسال شده است. این کد تا <CountdownUi onFinish={onFinishTimer} /> دقیقه دیگر معتبر است
        </Typography.Text>
      </section>

      <Typography.Text className="font-semibold">کد تائید</Typography.Text>
      <CodeInputUi fields={4} name="code" onChange={value => setCodeValue(value)} />

      <ButtonUi onClick={() => onConfirm(codeValue!)} disabled={codeValue?.length !== 4} className="max-w-[150px] max-h-[49px] mx-auto">
        تائید شماره همراه
      </ButtonUi>
    </Styles>
  )
}

export default PhoneConfirmCode
