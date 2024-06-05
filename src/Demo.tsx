import { CardFormValues, CardModal } from '@/entities'
import { useMeQuery } from '@/services'

export const Demo = () => {
  const { data } = useMeQuery()

  async function submit(data: CardFormValues) {
    console.log(data)

    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(data)
      }, 3000)
    })
  }

  return (
    <div>
      <CardModal onSubmit={submit} variant={'add'} />
    </div>
  )
}
