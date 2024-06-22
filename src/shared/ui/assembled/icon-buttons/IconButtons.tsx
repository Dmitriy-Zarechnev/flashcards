import { ComponentPropsWithoutRef } from 'react'
import { NavLink } from 'react-router-dom'

import { CardDeleteModal, CardFormValues, CardModal, DeckFormValues, DeckModal } from '@/entities'
import { ButtonTitle, CardData, IconButton } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  cardData?: CardData
  cardName: string
  deckData?: DeckFormValues
  deckId?: string
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
  deckId,
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
        <NavLink className={s.playLink} to={`${PATH.DECKSPAGE}/${deckId}/learn`}>
          <IconButton disabled={disabled} iconId={'playCircleOutline'} onClick={playFunction} />
        </NavLink>
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
