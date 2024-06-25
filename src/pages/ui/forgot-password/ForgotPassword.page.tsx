import { useNavigate } from 'react-router-dom'

import { ForgotPassword, ForgotPasswordFormValues } from '@/entities'
import { useSendRecoveryToEmailMutation } from '@/services'
import { LineLoader, PATH, Page } from '@/shared'

import s from './ForgotPassword.module.scss'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const [recoveryPassword, { isLoading: isSendRecoveryToEmailLoading }] =
    useSendRecoveryToEmailMutation()

  async function onSubmitHandler(data: ForgotPasswordFormValues) {
    await recoveryPassword({
      ...data,
      html: '<h1>Hi, ##name##</h1><p>Click <a href=`http://localhost:5173/reset-password/:##token##`>here</a> to recover your password</p>',
    })
    navigate(`${PATH.CHECKEMAIL}/${data.email}`)
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
