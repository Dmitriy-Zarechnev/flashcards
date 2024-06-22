import { useNavigate } from 'react-router-dom'

import { SignUpFormValues, SingUp } from '@/entities'
import { useLineLoading, useSignUpMutation } from '@/services'
import { PATH } from '@/shared'

export const SignUpPage = () => {
  /* несмотря на то что при успешной рестирации получаем данные пользователя, будем перенаправлять его на
     /sing-in => пусть там входит и получает токены. Перенаправление реализовано в SignUpPage*/

  const navigate = useNavigate()
  const { setLineLoading } = useLineLoading()
  const [signUp] = useSignUpMutation()

  async function onSubmitHandler({ email, password }: SignUpFormValues) {
    setLineLoading(true)
    try {
      const result = await signUp({ email, password }).unwrap()

      if (result) {
        navigate(PATH.SIGNIN)
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error)
    }
    setLineLoading(false)
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <SingUp onSubmit={onSubmitHandler} />
    </div>
  )
}
