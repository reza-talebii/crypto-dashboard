import { FC, createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { Register_Steps, ValueOfRegister_Steps } from '../models'
import { RegisterData } from '../models/schema/data'

interface IContextValue {
  states: {
    activeStep: ValueOfRegister_Steps
    RegisterData?: RegisterData
  }
  handlers: {
    stepHandler: (step: ValueOfRegister_Steps) => void
    setRegisterData: Dispatch<SetStateAction<RegisterData | undefined>>
  }
  requests: {}
}

export const RegisterCtx = createContext<IContextValue | undefined>(undefined)

export const RegisterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeStep, setActiveStep] = useState<ValueOfRegister_Steps>(Register_Steps.place)
  const [RegisterData, setRegisterData] = useState<RegisterData | undefined>()

  //handler
  const stepHandler = (step: ValueOfRegister_Steps) => setActiveStep(step)

  const ctxValue: IContextValue = {
    states: {
      activeStep,
      RegisterData,
    },
    handlers: {
      stepHandler,
      setRegisterData,
    },
    requests: {},
  }
  return <RegisterCtx.Provider value={ctxValue}>{children}</RegisterCtx.Provider>
}

export const useRegisterCtx = () => useContext(RegisterCtx)!
