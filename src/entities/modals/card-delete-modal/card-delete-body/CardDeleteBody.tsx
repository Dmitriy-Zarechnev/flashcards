import { useState } from 'react'

import { Button, Typography } from '@/shared'

import s from './CardDeleteBody.module.scss'

type CardDeleteBodyProps = {
  cardName: string
  closeModal?: () => void
  deleteCb: () => Promise<any>
}

export const CardDeleteBody = ({ cardName, closeModal, deleteCb }: CardDeleteBodyProps) => {
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
        All cards will be deleted.
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
          Delete Card
        </Button>
      </div>
    </div>
  )
}
