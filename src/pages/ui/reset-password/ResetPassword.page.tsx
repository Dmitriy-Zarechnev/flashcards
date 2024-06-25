import { CreateNewPassword, CreateNewPasswordFormValues } from '@/entities'
import { Page } from '@/shared'

export const ResetPasswordPage = () => {
  const onSubmitHandler = (data: CreateNewPasswordFormValues) => {
    console.log(data)
  }

  return (
    <Page>
      <CreateNewPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}
