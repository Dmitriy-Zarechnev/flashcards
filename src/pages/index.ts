//========================================================================================
// [ error ]
export { Error404 } from './error/Error404'

//========================================================================================
// [ private ]

export { CardsPage } from './private/cards/Cards.page'
export { DecksPage } from './private/decks/Decks.page'
export { LearnPage } from './private/learn/Learn.page'
export { ProfilePage } from './private/profile/Profile.page'

//========================================================================================
// [ public ] ⛔ если назвать папку public, то не будет работать prettier

export { CheckEmailPage } from './publc/check-email/CheckEmail.page'
export { ForgotPasswordPage } from './publc/forgot-password/ForgotPassword.page'
export { ResetPasswordPage } from './publc/reset-password/ResetPassword.page'
export { SignInPage } from './publc/sign-in/SignIn.page'
export { SignUpPage } from '@/pages/publc/sign-up/SignUp.page'
