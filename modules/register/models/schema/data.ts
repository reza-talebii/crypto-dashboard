import { z } from 'zod'

export const registerData = z
  .object({
    fullName: z.string(),
    nationalCode: z.string(),
    birthDay: z.string().datetime(),
    phoneNumber: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
    code: z.string().length(4),
    province: z.string(),
    city: z.string(),
    address: z.string(),
    latLng: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  })
  .partial()

export type RegisterData = z.infer<typeof registerData>
