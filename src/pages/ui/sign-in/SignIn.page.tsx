import { useNavigate } from 'react-router-dom'

import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'
import { PATH } from '@/shared/utils/routerVariables'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  async function onSubmitHandler(data: SignInFormValues) {
    try {
      const result = await login({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      }).unwrap() // .unwrap() для обработки ошибок

      // Проверяем, была ли мутация успешной
      if (result && localStorage.getItem('accessToken')) {
        /* !!! была проблема, что перенаправление осуществлялось только после второго запроса, походу токены
         не успевали засетаться при первом запросе */

        navigate(PATH.DECKSPAGE)
      }
    } catch (error) {
      // Обработка ошибок логинизации, например, показ сообщения
      console.error('Ошибка логинизации:', error)
    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <SignIn onSubmit={onSubmitHandler} />
    </div>
  )
}
