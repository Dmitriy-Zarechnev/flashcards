import { ComponentPropsWithoutRef } from 'react'

import { CardDeleteModal, DeckFormValues, DeckModal } from '@/entities'
import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './IconButtons.module.scss'

type IconButtonsProps = {
  cardName: string
  deckData: DeckFormValues
  deleteCb: () => Promise<any>
  disabled: boolean
  editCb: (data: DeckFormValues) => Promise<any>
  playFunction?: () => void
  showEditButtons?: boolean
  showPlayButton?: boolean
} & ComponentPropsWithoutRef<'div'>

export const IconButtons = ({
  cardName,
  className,
  deckData,
  deleteCb,
  disabled,
  editCb,
  playFunction,
  showEditButtons = false,
  showPlayButton = true,
  ...rest
}: IconButtonsProps) => {
  return (
    <div className={clsx(s.IconButtonsWrapper, className)} {...rest}>
      {showPlayButton && (
        <IconButton disabled={disabled} iconId={'playCircleOutline'} onClick={playFunction} />
      )}
      {showEditButtons && (
        <>
          <DeckModal deckData={deckData} onSubmit={editCb} variant={'edit'} />
          {/*<IconButton iconId={'editOutline'} onClick={editFunction} />*/}
          <CardDeleteModal cardName={cardName} deleteCb={deleteCb} type={'Deck'} />
        </>
      )}
    </div>
  )
}
