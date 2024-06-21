import { ButtonTitle, Dialog, IconButton } from '@/shared'

import { CardDeleteBody } from './card-delete-body/CardDeleteBody'

type CardDeleteModalProps = {
  cardName: string
  deleteCb: () => Promise<any>
  type: ButtonTitle
}

export const CardDeleteModal = ({ cardName, deleteCb, type }: CardDeleteModalProps) => {
  return (
    <Dialog title={`Delete ${type}`} trigger={<IconButton iconId={'trashOutline'} />}>
      <CardDeleteBody buttonTitle={type} cardName={cardName} deleteCb={deleteCb} />
    </Dialog>
  )
}
