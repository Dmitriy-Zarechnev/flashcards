import { DeckFormValues, DeckModal } from '@/entities'
import { useCreateDeckMutation } from '@/services/flow/decks.service'

export const CreateDeckDemoPage = () => {
  // хук представляет заранее готовый массив данных - кортеж
  // 1. createDeck - сам запрос
  const [createDeck] = useCreateDeckMutation()

  async function onSubmit(data: DeckFormValues) {
    const formData = new FormData()

    formData.append('cover', data.cover)
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate.toString())

    await createDeck(formData)
  }

  return <DeckModal onSubmit={onSubmit} variant={'add'} />
}
