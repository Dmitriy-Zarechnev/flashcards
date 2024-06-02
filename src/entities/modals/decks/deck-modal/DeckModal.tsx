import { DeckFormValues } from '@/entities'
import { Button, Dialog } from '@/shared'

import { DeckModalForm } from './deck-modal-form/DeckModalForm'

type DeckModalProps = {
  onSubmit: (data: DeckFormValues) => Promise<any>
  variant: 'add' | 'edit'
}

export const DeckModal = ({ onSubmit, variant }: DeckModalProps) => {
  const title = variant === 'add' ? 'Add New Deck' : 'Edit Deck'

  return (
    <Dialog title={title} trigger={<Button variant={'primary'}>{title}</Button>}>
      <DeckModalForm btnTitle={title} onSubmit={onSubmit} />
    </Dialog>
  )
}
