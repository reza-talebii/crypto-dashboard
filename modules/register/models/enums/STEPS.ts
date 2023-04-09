export enum Register_Steps {
  personal = 0,
  communicational = 1,
  place = 2,
}

// key of & value of
export type KeyOfRegister_Steps = keyof typeof Register_Steps
export type ValueOfRegister_Steps = typeof Register_Steps[keyof typeof Register_Steps]
