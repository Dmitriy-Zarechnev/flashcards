import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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
        toast.success("You're successfully signed in. Welcome!")
        navigate(PATH.DECKSPAGE)
      }
    } catch (error) {
      toast.error("We couldn't recognize that login or password. Care to try again?")
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
