import { SignUpFormValues, SingUp } from '@/entities'

export const SignUpPage = () => {
  function onSubmitHandler(data: SignUpFormValues) {
    console.log(data)
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <SingUp onSubmit={onSubmitHandler} />
    </div>
  )
}
