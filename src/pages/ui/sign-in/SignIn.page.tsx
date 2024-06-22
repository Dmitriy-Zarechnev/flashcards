import { useNavigate } from 'react-router-dom'

import { SignIn, SignInFormValues } from '@/entities'
import { useLineLoading, useLoginMutation } from '@/services'
import { PATH } from '@/shared'

export const SignInPage = () => {
  const navigate = useNavigate()
  const { setLineLoading } = useLineLoading()
  const [login] = useLoginMutation()

  async function onSubmitHandler({ email, password, rememberMe }: SignInFormValues) {
    setLineLoading(true)
    try {
      const result = await login({ email, password, rememberMe }).unwrap()

      if (result) {
        navigate(PATH.DECKSPAGE)
      }
    } catch (error) {
      console.error('Ошибка логинизации:', error)
    }
    setLineLoading(false)
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <SignIn onSubmit={onSubmitHandler} />
    </div>
  )
}
