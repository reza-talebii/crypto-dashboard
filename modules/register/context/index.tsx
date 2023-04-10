import { FC, createContext, useContext, ReactNode, useState } from 'react'
import { ValueOfRegister_Steps } from '../models'
import { RegisterData } from '../models/schema/data'

interface IContextValue {
  states: {
    activeStep: ValueOfRegister_Steps
    RegisterData?: RegisterData
  }
  handlers: {
    stepHandler: (step: ValueOfRegister_Steps) => void
    setRegisterDataHandler: (data: RegisterData) => void
  }
  requests: {}
}

export const RegisterCtx = createContext<IContextValue | undefined>(undefined)

export const RegisterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeStep, setActiveStep] = useState<ValueOfRegister_Steps>(0)
  const [RegisterData, setRegisterData] = useState<RegisterData | undefined>()

  //handler
  const stepHandler = (step: ValueOfRegister_Steps) => setActiveStep(step)
  const setRegisterDataHandler = (data: RegisterData) => setRegisterData(data)

  const ctxValue: IContextValue = {
    states: {
      activeStep,
      RegisterData,
    },
    handlers: {
      stepHandler,
      setRegisterDataHandler,
    },
    requests: {},
  }
  return <RegisterCtx.Provider value={ctxValue}>{children}</RegisterCtx.Provider>
}

export const useRegisterCtx = () => useContext(RegisterCtx)!
