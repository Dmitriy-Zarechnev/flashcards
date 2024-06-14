import { CardDeleteModal } from '@/entities'

export const Demo = () => {
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
