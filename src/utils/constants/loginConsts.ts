import { z } from 'zod'

export const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Required field'),
})

export type FormData = z.infer<typeof schema>
