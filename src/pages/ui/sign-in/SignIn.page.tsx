import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'
import { LineLoader, PATH, Page } from '@/shared'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login, { isError, isLoading }] = useLoginMutation()

  async function onSubmitHandler({ email, password, rememberMe }: SignInFormValues) {
    await login({ email, password, rememberMe }).unwrap()

    if (!isError) {
      toast.success("You're successfully signed in. Welcome!")
      navigate(PATH.DECKSPAGE)
    }
  }

  return (
    <>
      {isLoading && <LineLoader />}
      <Page mt={'100px'}>
        <SignIn onSubmit={onSubmitHandler} />
      </Page>
    </>
  )
}
