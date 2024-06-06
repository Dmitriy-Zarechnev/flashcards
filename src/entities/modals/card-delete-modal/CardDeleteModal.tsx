import { Dialog, IconButton } from '@/shared'

import { CardDeleteBody } from './card-delete-body'

type CardDeleteModalProps = {
  cardName: string
  deleteCb: () => Promise<any>
}

export const CardDeleteModal = ({ cardName, deleteCb }: CardDeleteModalProps) => {
  return (
    <Dialog title={'Delete Card'} trigger={<IconButton iconId={'trashOutline'} />}>
      <CardDeleteBody cardName={cardName} deleteCb={deleteCb} />
    </Dialog>
  )
}
