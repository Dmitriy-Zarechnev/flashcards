import { useLoginMutation, useMeQuery } from '@/services'

export const Demo = () => {
  const [login] = useLoginMutation()
  const { data: me, refetch: refetchMe } = useMeQuery()

  async function onSubmitHandler() {
    await login({
      email: 'test@test.com',
      password: 'test',
      rememberMe: false,
    })
    refetchMe()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <button onClick={onSubmitHandler} style={{ background: 'green' }}>
        AUTH
      </button>
      <button onClick={() => refetchMe()} style={{ background: 'green' }}>
        ME
      </button>
    </div>
  )
}
