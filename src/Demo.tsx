import { CardFormValues, CardModal } from '@/entities'
import { useMeQuery } from '@/services'

export const Demo = () => {
  const { data } = useMeQuery()

  async function submit(data: CardFormValues) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  }

  return (
    <div>
      <CardModal onSubmit={submit} />
    </div>
  )
}
