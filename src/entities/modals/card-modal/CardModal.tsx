import { CardFormValues } from '@/entities'
import { CardModalForm } from '@/entities/modals/card-modal/card-modal-form/CardModalForm'
import { Button, CardData, Dialog, IconButton, ModalVariant } from '@/shared'

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
