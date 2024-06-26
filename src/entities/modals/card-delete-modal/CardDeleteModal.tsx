import { CSSProperties, forwardRef } from 'react'

import { ButtonTitle, IconButton } from '@/shared'

import { Dialog } from '../_components'
import { CardDeleteBody } from './card-delete-body/CardDeleteBody'

type CardDeleteModalProps = {
  cardName?: string
  deleteCb: () => Promise<any>
  style?: CSSProperties
  type: ButtonTitle
}

export const CardDeleteModal = forwardRef<HTMLDivElement, CardDeleteModalProps>(
  ({ cardName, deleteCb, style, type }, ref) => {
    return (
      <Dialog
        ref={ref}
        title={`Delete ${type}`}
        trigger={<IconButton iconId={'trashOutline'} style={style} />}
      >
        <CardDeleteBody buttonTitle={type} cardName={cardName} deleteCb={deleteCb} />
      </Dialog>
    )
  }
)
