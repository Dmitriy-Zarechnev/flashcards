import { DeckFormValues, DeckModal } from '@/entities'
import { useCreateDeckMutation } from '@/services/decks/decks.service'

export const CreateDeckPage = () => {
  // хук представляет заранее готовый массив данных - кортеж
  // 1. createDeck - сам запрос
  const [createDeck] = useCreateDeckMutation()

  async function onSubmit(data: DeckFormValues) {
    createDeck({
      cover: data.cover,
      isPrivate: data.private,
      name: data.name,
    })
  }

  return <DeckModal onSubmit={onSubmit} variant={'add'} />
}
