import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword, ForgotPasswordFormValues } from '@/entities'
import { useSendRecoveryToEmailMutation } from '@/services'
import { LineLoader, PATH, Page } from '@/shared'

import s from './ForgotPassword.module.scss'

type ApiError = {
  data?: {
    message: string
  }
}

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const [recoveryPassword, { isLoading: isSendRecoveryToEmailLoading }] =
    useSendRecoveryToEmailMutation()

  async function onSubmitHandler(data: ForgotPasswordFormValues) {
    try {
      await recoveryPassword({
        ...data,
        html: '<h1>Hi, ##name##</h1><p>Click <a href=`http://localhost:5173/reset-password/##token##`>here</a> to recover your password</p>',
      }).unwrap()

      navigate(`${PATH.CHECKEMAIL}/${data.email}`)
      toast.success('Send!')
    } catch (error) {
      const apiError = error as ApiError

      toast.error(apiError.data?.message)
    }
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
