import { CardFormValues } from '@/entities'
import { CardModalForm } from '@/entities/modals/card-modal/card-modal-form/CardModalForm'
import { CreateCardArgs } from '@/services'
import { Button, Dialog } from '@/shared'

type CardModalProps = {
  cardData?: Omit<CreateCardArgs, 'id'>
  onSubmit: (data: CardFormValues) => Promise<any>
  variant: 'add' | 'edit'
}

export const CardModal = ({ cardData, onSubmit, variant }: CardModalProps) => {
  const title = variant === 'add' ? 'Add New Card' : 'Edit Card'

  return (
    <Dialog title={title} trigger={<Button variant={'primary'}>{title}</Button>}>
      <CardModalForm btnTitle={title} cardData={cardData} onSubmit={onSubmit} />
    </Dialog>
  )
}
