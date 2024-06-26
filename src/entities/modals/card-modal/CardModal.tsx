import { CardFormValues } from '@/entities'
import { Button, CardData, Dialog, IconButton, ModalVariant } from '@/shared'

import { CardModalForm } from './card-modal-form/CardModalForm'

type CardModalProps = {
  cardData?: CardData
  onSubmit?: (data: CardFormValues) => Promise<any>
  variant: ModalVariant
}

export const CardModal = ({ cardData, onSubmit, variant }: CardModalProps) => {
  const title = variant === 'add' ? 'Add New Card' : 'Edit Card'

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
      <CardModalForm btnTitle={title} cardData={cardData} onSubmit={onSubmit} />
    </Dialog>
  )
}
