import { z } from 'zod'

//========================================================================================

const email = z.string().trim().min(1, 'Email is required').email('Invalid email address')
const password = z.string().min(3, 'Password must be at least 3 characters long')

//========================================================================================

const signUp = z
  .object({
    confirmPassword: z.string().trim(),
    email,
    password,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

const forgotPassword = z.object({ email })

const createNewPassword = z.object({ password })

const logIn = z.object({
  email,
  password,
  radioValue: z.any(),
  rememberMe: z.boolean().default(false),
  select: z.any(),
})

//========================================================================================

export const schema = {
  createNewPassword,
  forgotPassword,
  logIn,
  signUp,
}
