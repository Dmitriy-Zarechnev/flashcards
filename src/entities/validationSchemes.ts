import { z } from 'zod'

//========================================================================================

const email = z.string().trim().min(1, 'Email is required').email('Invalid email address')
const password = z.string().min(3, 'Password must be at least 3 characters long')
const name = z.string().trim().min(3, 'Name must be at least 3 characters long')

//========================================================================================
// [ AUTH ]

const createNewPassword = z.object({ password })
const forgotPassword = z.object({ email })
const signIn = z.object({ email, password, rememberMe: z.boolean() })

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

const editProfile = z.object({
  name,
})

//========================================================================================
// [ MODALS ]

const deck = z.object({
  cover: z.any(),
  isPrivate: z.boolean(),
  name,
})

const card = z.object({
  answer: z.string().trim().min(3, 'Answer must be at least 3 characters long'),
  answerImg: z.any(),
  question: z.string().trim().min(3, 'Question must be at least 3 characters long'),
  questionImg: z.any(),
})

//========================================================================================

export const authSchemes = {
  createNewPassword,
  editProfile,
  forgotPassword,
  signIn,
  signUp,
}

export const modalSchemes = {
  card,
  deck,
}

//========================================================================================

export type CreateNewPasswordFormValues = z.infer<typeof authSchemes.createNewPassword>
export type EditProfileFormValues = z.infer<typeof authSchemes.editProfile>
export type ForgotPasswordFormValues = z.infer<typeof authSchemes.forgotPassword>
export type SignInFormValues = z.infer<typeof authSchemes.signIn>
export type SignUpFormValues = z.infer<typeof authSchemes.signUp>

export type CardFormValues = z.infer<typeof modalSchemes.card>
export type DeckFormValues = z.infer<typeof modalSchemes.deck>
