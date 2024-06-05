import { CardFormValues } from '@/entities'
import { CardModalForm } from '@/entities/modals/card-modal/card-modal-form/CardModalForm'
import { Button, Dialog } from '@/shared'

type CardModalProps = {
  onSubmit: (data: CardFormValues) => Promise<any>
}

export const CardModal = ({ onSubmit }: CardModalProps) => {
  const title = 'Add New Card'

  return (
    <Dialog title={title} trigger={<Button variant={'primary'}>{title}</Button>}>
      <CardModalForm onSubmit={onSubmit} />
    </Dialog>
  )
}
