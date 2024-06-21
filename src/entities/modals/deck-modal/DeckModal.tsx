import { DeckFormValues } from '@/entities'
import { Button, Dialog, IconButton, ModalVariant } from '@/shared'

import { DeckModalForm } from './deck-modal-form/DeckModalForm'

type DeckModalProps = {
  deckData?: DeckFormValues
  onSubmit?: (data: DeckFormValues) => Promise<any>
  variant: ModalVariant
}

export const DeckModal = ({ deckData, onSubmit, variant }: DeckModalProps) => {
  const title = variant === 'add' ? 'Add New Deck' : 'Edit Deck'

  return (
    <Dialog
      title={title}
      trigger={
        variant === 'add' ? (
          <Button variant={'primary'}>{title}</Button>
        ) : (
          <IconButton iconId={'editOutline'} />
        )
      }
    >
      <DeckModalForm btnTitle={title} deckData={deckData} onSubmit={onSubmit} />
    </Dialog>
  )
}
