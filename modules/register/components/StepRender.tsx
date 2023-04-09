import React from 'react'
import { useRegisterCtx } from '../context'
import { Register_Steps } from '../models'
import PersonalInfoForm from '../modules/personal'
import PlaceInformation from '../modules/place'
import CommunicationalInfo from '../modules/communicational'

const StepRender = () => {
  const {
    states: { activeStep },
  } = useRegisterCtx()

  const steps = {
    [Register_Steps.personal]: <PersonalInfoForm />,
    [Register_Steps.communicational]: <CommunicationalInfo />,
    [Register_Steps.place]: <PlaceInformation />,
  }

  return steps[activeStep]
}

export default StepRender
