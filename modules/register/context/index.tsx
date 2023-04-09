import { FC, createContext, useContext, ReactNode, useState } from 'react'
import { ValueOfRegister_Steps } from '../models'

interface IContextValue {
  states: {
    activeStep: ValueOfRegister_Steps
  }
  handlers: {
    stepHandler: (step: ValueOfRegister_Steps) => void
  }
  requests: {}
}

export const RegisterCtx = createContext<IContextValue | undefined>(undefined)

export const RegisterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeStep, setActiveStep] = useState<ValueOfRegister_Steps>(0)

  //handler
  const stepHandler = (step: ValueOfRegister_Steps) => setActiveStep(step)

  const ctxValue: IContextValue = {
    states: {
      activeStep,
    },
    handlers: {
      stepHandler,
    },
    requests: {},
  }
  return <RegisterCtx.Provider value={ctxValue}>{children}</RegisterCtx.Provider>
}

export const useRegisterCtx = () => useContext(RegisterCtx)!
