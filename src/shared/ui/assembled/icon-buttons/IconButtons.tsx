import { ComponentPropsWithoutRef } from 'react'

import { CardDeleteModal, CardFormValues, CardModal, DeckFormValues, DeckModal } from '@/entities'
import { ButtonTitle } from '@/entities/modals/card-delete-modal/CardDeleteModal'
import { CardData } from '@/entities/modals/card-modal/CardModal'
import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  cardData?: CardData
  cardName: string
  deckData?: DeckFormValues
  deleteBtnType: ButtonTitle
  deleteCb: () => Promise<any>
  disabled?: boolean
  editCardCb?: (data: CardFormValues) => Promise<any>
  editDeckCb?: (data: DeckFormValues) => Promise<any>
  playFunction?: () => void
  showEditButtons?: boolean
  showPlayButton?: boolean
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  cardData,
  cardName,
  className,
  deckData,
  deleteBtnType,
  deleteCb,
  disabled,
  editCardCb,
  editDeckCb,
  playFunction,
  showEditButtons = false,
  showPlayButton = true,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.iconButtonsWrapper, className)} {...rest}>
      {showPlayButton && (
        <IconButton disabled={disabled} iconId={'playCircleOutline'} onClick={playFunction} />
      )}
      {showEditButtons && (
        <>
          {deleteBtnType === 'Card' ? (
            <CardModal cardData={cardData} onSubmit={editCardCb} variant={'edit'} />
          ) : (
            <DeckModal deckData={deckData} onSubmit={editDeckCb} variant={'edit'} />
          )}
          <CardDeleteModal cardName={cardName} deleteCb={deleteCb} type={deleteBtnType} />
        </>
      )}
    </div>
  )
}
