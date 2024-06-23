import { useNavigate } from 'react-router-dom'

import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'
import { LineLoader, PATH } from '@/shared'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  async function onSubmitHandler({ email, password, rememberMe }: SignInFormValues) {
    try {
      const result = await login({ email, password, rememberMe }).unwrap()

      if (result) {
        navigate(PATH.DECKSPAGE)
      }
    } catch (error) {
      console.error('Ошибка логинизации:', error)
    }
  }

  return (
    <>
      {isLoading && <LineLoader />}
      <div style={{ paddingTop: '100px' }}>
        <SignIn onSubmit={onSubmitHandler} />
      </div>
    </>
  )
}
