import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn, SignInFormValues } from '@/entities'
import { useLoginMutation } from '@/services'
import { flashcardsApi } from '@/services/api/flashcards.api'
import { LineLoader, PATH, Page } from '@/shared'

export const SignInPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isError, isLoading }] = useLoginMutation()

  async function onSubmitHandler({ email, password, rememberMe }: SignInFormValues) {
    await login({ email, password, rememberMe }).unwrap()

    if (!isError) {
      toast.success("You're successfully signed in. Welcome!")
      navigate(PATH.DECKSPAGE)

      return
    }
    // При логинизации после ошибки компонент не перерисовывался, поэтому очистили state
    dispatch(flashcardsApi.util.resetApiState())
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
