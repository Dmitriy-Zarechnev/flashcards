import { CardDeleteModal } from '@/entities'
import { useMeQuery } from '@/services'

export const Demo = () => {
  const { data } = useMeQuery()

  async function deleteCardHandler() {
    return new Promise((res, rej) => {
      // setTimeout(() => {
      //   res('DELETED')
      // }, 3000)
      setTimeout(() => {
        rej('NOT DELETED')
      }, 2000)
    })
  }

  return (
    <div>
      <CardDeleteModal cardName={'CARD NAME'} deleteCb={deleteCardHandler} />
    </div>
  )
}
