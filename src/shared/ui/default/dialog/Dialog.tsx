import { ComponentPropsWithRef, MouseEvent, ReactNode, useState } from 'react'

import { Card, Typography } from '@/shared'

import s from './Dialog.module.scss'

type DialogProps = {
  isSubmitting: boolean
  trigger: ReactNode
} & ComponentPropsWithRef<'div'>

export const Dialog = ({ children, trigger, ...rest }: DialogProps) => {
  const [isShown, setShown] = useState(true)

  function show() {
    setShown(true)
  }

  function close(event: MouseEvent) {
    event.stopPropagation()
    setShown(false)
  }

  return (
    <div onClick={show} {...rest}>
      {trigger}
      {isShown && (
        <div className={s.overlay} onClick={close}>
          <Card className={s.card} fullWidth={false} onClick={e => e.stopPropagation()}>
            <div className={s.header}>
              <Typography.H3>123</Typography.H3>
            </div>
            {children}
          </Card>
        </div>
      )}
    </div>
  )
}
