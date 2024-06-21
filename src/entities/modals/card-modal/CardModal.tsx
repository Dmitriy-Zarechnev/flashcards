import { CardFormValues } from '@/entities'
import { CardModalForm } from '@/entities/modals/card-modal/card-modal-form/CardModalForm'
import { CreateCardArgs } from '@/services'
import { Button, Dialog, IconButton } from '@/shared'

export type CardData = { answerImg?: string; questionImg?: string } & Omit<
  CreateCardArgs,
  'answerImg' | 'id' | 'questionImg'
>

type CardModalProps = {
  cardData?: CardData
  onSubmit?: (data: CardFormValues) => Promise<any>
  variant: 'add' | 'edit'
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
