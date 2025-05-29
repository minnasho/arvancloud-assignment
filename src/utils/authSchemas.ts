import { z } from 'zod'

// Login schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Required field'),
})
export type LoginFormData = z.infer<typeof loginSchema>

// Register schema
export const registerSchema = z.object({
  username: z.string().min(3, 'Required field'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Required field'),
})
export type RegisterFormData = z.infer<typeof registerSchema>
