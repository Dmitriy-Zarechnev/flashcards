import { DeckFormValues, DeckModal } from '@/entities'
import { useCreateDeckMutation } from '@/services/decks/decks.service'

export const CreateDeckPage = () => {
  // хук представляет заранее готовый массив данных - кортеж
  // 1. createDeck - сам запрос
  const [createDeck] = useCreateDeckMutation()

  async function onSubmit(data: DeckFormValues) {
    const formData = new FormData()

    formData.append('cover', data.cover)
    formData.append('name', data.name)
    formData.append('isPrivate', data.private.toString())

    // createDeck({
    //   cover: data.cover,
    //   isPrivate: data.private,
    //   name: data.name,
    // })

    createDeck(formData)
  }

  return <DeckModal onSubmit={onSubmit} variant={'add'} />
}
