import { useNavigate } from 'react-router-dom'

import { SignUpFormValues, SingUp } from '@/entities'
import { useSignUpMutation } from '@/services'
import { LineLoader, PATH } from '@/shared'

export const SignUpPage = () => {
  /* несмотря на то что при успешной рестирации получаем данные пользователя, будем перенаправлять его на
     /sing-in => пусть там входит и получает токены. Перенаправление реализовано в SignUpPage*/

  const navigate = useNavigate()
  const [signUp, { isLoading }] = useSignUpMutation()

  async function onSubmitHandler({ email, password }: SignUpFormValues) {
    try {
      const result = await signUp({ email, password }).unwrap()

      if (result) {
        navigate(PATH.SIGNIN)
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error)
    }
  }

  return (
    <>
      {isLoading && <LineLoader />}
      <div style={{ paddingTop: '100px' }}>
        <SingUp onSubmit={onSubmitHandler} />
      </div>
    </>
  )
}
