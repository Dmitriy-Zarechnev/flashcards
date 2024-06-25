import { useParams } from 'react-router-dom'

import { CreateNewPassword, CreateNewPasswordFormValues } from '@/entities'
import { Page } from '@/shared'

export const ResetPasswordPage = () => {
  // ----- Достали email из url-а -----
  const params = useParams()
  const token = params.token ?? ''

  console.log(token)

  const onSubmitHandler = (data: CreateNewPasswordFormValues) => {
    console.log(data)
  }

  return (
    <Page mt={'100px'}>
      <CreateNewPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}
