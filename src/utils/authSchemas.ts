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

// New Article schema
export const newArticleSchema = z.object({
  title: z.string().nonempty('Required field'),
  description: z.string().nonempty('Required field'),
  body: z.string().nonempty('Required field'),
})
export type NewArticleFormData = z.infer<typeof newArticleSchema>
