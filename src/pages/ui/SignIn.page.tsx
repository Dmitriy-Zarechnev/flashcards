import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  function onSubmitHandler(data: SignInFormValues) {
    login({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    })
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <SignIn onSubmit={onSubmitHandler} />
    </div>
  )
}
