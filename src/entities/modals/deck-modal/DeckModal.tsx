import { CSSProperties, forwardRef } from 'react'

import { DeckFormValues } from '@/entities'
import { Button, IconButton, ModalVariant } from '@/shared'

import { Dialog } from '../_components'
import { DeckModalForm } from './deck-modal-form/DeckModalForm'

type DeckModalProps = {
  closeModal?: () => void
  deckData?: DeckFormValues
  onSubmit?: (data: DeckFormValues) => Promise<any>
  style?: CSSProperties
  variant: ModalVariant
}

export const DeckModal = forwardRef<HTMLDivElement, DeckModalProps>(
  ({ closeModal, deckData, onSubmit, style, variant }, ref) => {
    const title = variant === 'add' ? 'Add New Deck' : 'Edit Deck'

    return (
      <Dialog
        ref={ref}
        title={title}
        trigger={
          variant === 'add' ? (
            <Button variant={'primary'}>{title}</Button>
          ) : (
            <IconButton iconId={'editOutline'} style={style} />
          )
        }
      >
        <DeckModalForm
          btnTitle={title}
          closeModal={closeModal}
          deckData={deckData}
          onSubmit={onSubmit}
        />
      </Dialog>
    )
  }
)
