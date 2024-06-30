import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword, ForgotPasswordFormValues } from '@/entities'
import { useSendRecoveryToEmailMutation } from '@/services'
import { flashcardsApi } from '@/services/api/flashcards.api'
import { LineLoader, PATH, Page } from '@/shared'

import s from './ForgotPassword.module.scss'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [recoveryPassword, { isError, isLoading: isSendRecoveryToEmailLoading }] =
    useSendRecoveryToEmailMutation()

  async function onSubmitHandler(data: ForgotPasswordFormValues) {
    await recoveryPassword({
      ...data,
      html: '<h1>Hi, ##name##</h1><p>Click <a href=`https://flashcards-lemon-seven.vercel.app/reset-password/##token##`>here</a> to recover your password</p>',
    }).unwrap()

    if (!isError) {
      navigate(`${PATH.CHECKEMAIL}/${data.email}`)
      toast.success('An email has been sent to your address with further instructions!')

      return
    }
    dispatch(flashcardsApi.util.resetApiState())
  }

  return (
    <>
      {isSendRecoveryToEmailLoading && <LineLoader />}
      <Page className={s.wrapper} mt={'100px'}>
        <ForgotPassword onSubmit={onSubmitHandler} />
      </Page>
    </>
  )
}
