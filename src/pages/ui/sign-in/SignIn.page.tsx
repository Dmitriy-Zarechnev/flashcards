import { useNavigate } from 'react-router-dom'

import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'

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
      if (result) {
        // navigate('/decks') // Перенаправляем пользователя
        navigate('/')
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
