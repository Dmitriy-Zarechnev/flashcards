import { CardFormValues } from '@/entities'
import { CardModalForm } from '@/entities/modals/card-modal/card-modal-form/CardModalForm'
import { Button, Dialog } from '@/shared'

type CardModalProps = {
  onSubmit: (data: CardFormValues) => Promise<any>
  variant: 'add' | 'edit'
}

export const CardModal = ({ onSubmit, variant }: CardModalProps) => {
  const title = variant === 'add' ? 'Add New Card' : 'Edit Card'

  return (
    <Dialog title={title} trigger={<Button variant={'primary'}>{title}</Button>}>
      <CardModalForm btnTitle={title} onSubmit={onSubmit} />
    </Dialog>
  )
}
