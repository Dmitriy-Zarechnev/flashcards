import { DeckFormValues, DeckModal } from '@/entities'
import { useCreateDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'

export const Demo = () => {
  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const { data } = useGetDeckByIdQuery({ id: 'clxivq8an03cfpb01lijvljnx' })

  console.log(data)

  async function onSubmit(data: DeckFormValues) {
    // при создании м
    await createDeck({ ...data })
  }

  async function onUpdate(data: DeckFormValues) {
    await updateDeck({ id: 'clxivq8an03cfpb01lijvljnx', ...data })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <DeckModal onSubmit={onSubmit} variant={'add'} />
      <DeckModal deckData={data} onSubmit={onUpdate} variant={'edit'} />
    </div>
  )
}
