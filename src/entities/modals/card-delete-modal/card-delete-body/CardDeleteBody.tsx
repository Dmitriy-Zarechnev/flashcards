import { useState } from 'react'

import { ButtonTitle } from '@/entities/modals/card-delete-modal/CardDeleteModal'
import { Button, Typography } from '@/shared'

import s from './CardDeleteBody.module.scss'

type CardDeleteBodyProps = {
  buttonTitle: ButtonTitle
  cardName: string
  closeModal?: () => void
  deleteCb: () => Promise<any>
}

export const CardDeleteBody = ({
  buttonTitle,
  cardName,
  closeModal,
  deleteCb,
}: CardDeleteBodyProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function deleteCardHandler() {
    setIsSubmitting(true)
    try {
      await deleteCb()
      closeModal?.()
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={s.body}>
      <Typography.Body1 as={'p'} className={s.text}>
        Do you really want to remove <span>{cardName}</span>?
        <br />
        {buttonTitle === 'Deck' && 'All cards will be deleted.'}
      </Typography.Body1>
      <div className={s.footerBtnWrapper}>
        <Button onClick={closeModal} type={'button'} variant={'secondary'}>
          Cancel
        </Button>
        <Button
          disabled={isSubmitting}
          onClick={deleteCardHandler}
          type={'button'}
          variant={'primary'}
        >
          {`Delete ${buttonTitle}`}
        </Button>
      </div>
    </div>
  )
}
