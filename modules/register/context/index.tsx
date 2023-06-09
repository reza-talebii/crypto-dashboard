'use client'

import { FC, createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { Register_Steps, ValueOfRegister_Steps } from '../models'
import { RegisterData, registerData } from '../models/schema/data'
import { FormValuesPlaceInformation } from '../modules/place'
import { AuthService } from '@/services/controllers/auth/auth.service'
import { signIn } from 'next-auth/react'
import { ROUTES } from '@/models/enums'
import { message } from 'antd'
import { useRouter } from 'next/navigation'
import { useSignIn } from '@/hook/auth'

interface IContextValue {
  states: {
    activeStep: ValueOfRegister_Steps
    RegisterData?: RegisterData
    registerLoading: boolean
  }
  handlers: {
    stepHandler: (step: ValueOfRegister_Steps) => void
    setRegisterData: Dispatch<SetStateAction<RegisterData | undefined>>
  }
  requests: {
    registerReq: (values: FormValuesPlaceInformation) => Promise<void>
  }
}

export const RegisterCtx = createContext<IContextValue | undefined>(undefined)

export const RegisterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { signInHandler } = useSignIn()
  const router = useRouter()

  const [registerLoading, setRegisterLoading] = useState<boolean>(false)
  const { register } = new AuthService()
  const [activeStep, setActiveStep] = useState<ValueOfRegister_Steps>(Register_Steps.personal)
  const [RegisterData, setRegisterData] = useState<RegisterData | undefined>()

  //handler
  const stepHandler = (step: ValueOfRegister_Steps) => setActiveStep(step)

  //requests
  const registerReq = async (values: FormValuesPlaceInformation) => {
    const data = { ...RegisterData, ...values }

    setRegisterLoading(true)

    try {
      const res = await register({
        email: data.email!,
        password: data.password!,
        password_confirmation: data?.password_confirmation!,
        name: data.fullName!,
      })

      if (res.status === 200) {
        try {
          signInHandler(data.email!, data.password!, ROUTES.dashboard)
        } finally {
          setRegisterLoading(false)
        }

        return
      }
      setRegisterLoading(false)
    } catch {
      setRegisterLoading(false)
    }
  }

  const ctxValue: IContextValue = {
    states: {
      activeStep,
      RegisterData,
      registerLoading,
    },
    handlers: {
      stepHandler,
      setRegisterData,
    },
    requests: {
      registerReq,
    },
  }
  return <RegisterCtx.Provider value={ctxValue}>{children}</RegisterCtx.Provider>
}

export const useRegisterCtx = () => useContext(RegisterCtx)!
