import { Button, Dialog } from '@/shared'

import { DecksModalForm } from './../form'

type AddDeckModalProps = {
  onSubmit: (data: any) => Promise<any>
}

export const AddDeckModal = ({ onSubmit }: AddDeckModalProps) => {
  const title = 'Add New Deck'

  return (
    <Dialog title={title} trigger={<Button variant={'primary'}>{title}</Button>}>
      <DecksModalForm btnTitle={title} onSubmit={onSubmit} />
    </Dialog>
  )
}
