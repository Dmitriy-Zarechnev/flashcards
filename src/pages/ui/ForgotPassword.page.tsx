import { ForgotPassword, ForgotPasswordFormValues } from '@/entities'

export const ForgotPasswordPage = () => {
  function onSubmitHandler(data: ForgotPasswordFormValues) {
    console.log(data)
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </div>
  )
}
