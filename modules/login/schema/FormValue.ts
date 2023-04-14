import { z } from 'zod'

export const FormValueLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
})
export type FormValueLogin = z.infer<typeof FormValueLoginSchema>
