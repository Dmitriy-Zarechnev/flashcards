import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignUp, SignUpFormValues } from '@/entities'
import { useSignUpMutation } from '@/services'
import { LineLoader, PATH, Page } from '@/shared'

export const SignUpPage = () => {
  /* несмотря на то что при успешной рестирации получаем данные пользователя, будем перенаправлять его на
     /sing-in => пусть там входит и получает токены. Перенаправление реализовано в SignUpPage*/

  const navigate = useNavigate()
  const [signUp, { isLoading }] = useSignUpMutation()

  async function onSubmitHandler({ email, password }: SignUpFormValues) {
    try {
      const result = await signUp({ email, password }).unwrap()

      if (result) {
        toast.info("Welcome aboard! You've successfully signed up!")
        navigate(PATH.SIGNIN)
      }
    } catch (error) {
      toast.error('Oops! Something went wrong. Please check your information and try again.')
    }
  }

  return (
    <>
      {isLoading && <LineLoader />}
      <Page mt={'100px'}>
        <SignUp onSubmit={onSubmitHandler} />
      </Page>
    </>
  )
}
