import { DeckFormValues, DeckModal } from '@/entities'
import { useCreateDeckMutation, useGetDeckByIdQuery, useUpdateDeckMutation } from '@/services'

export const Demo = () => {
  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const { data } = useGetDeckByIdQuery({ id: 'clxhuia0k02x3pb01h00qgotg' })

  console.log(data)

  async function onSubmit({ cover, isPrivate, name }: DeckFormValues) {
    // при создании м
    await createDeck({ cover, isPrivate, name })
  }

  async function onUpdate(data: DeckFormValues) {
    await updateDeck({ id: 'clxhuia0k02x3pb01h00qgotg', ...data })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <DeckModal onSubmit={onSubmit} variant={'add'} />
      <DeckModal deckData={data} onSubmit={onUpdate} variant={'edit'} />
    </div>
  )
}
