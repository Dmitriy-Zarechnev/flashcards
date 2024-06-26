import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CreateNewPassword, CreateNewPasswordFormValues } from '@/entities'
import { useSendResetPasswordMutation } from '@/services'
import { LineLoader, PATH, Page } from '@/shared'

export const ResetPasswordPage = () => {
  const navigate = useNavigate()

  // ----- Достали token из url-а -----
  const params = useParams()
  const token = params.token ?? ''

  const [resetPassword, { isLoading: isResetPasswordLoading }] = useSendResetPasswordMutation()
  const onSubmitHandler = async (data: CreateNewPasswordFormValues) => {
    await resetPassword({ ...data, token })
    toast.success('Your password has been successfully changed!')
    navigate(`${PATH.SIGNIN}`)
  }

  return (
    <>
      {isResetPasswordLoading && <LineLoader />}
      <Page mt={'100px'}>
        <CreateNewPassword onSubmit={onSubmitHandler} />
      </Page>
    </>
  )
}
