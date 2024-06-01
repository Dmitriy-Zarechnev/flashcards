import {
  ComponentPropsWithRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from 'react'

import { Card, IconButton, Typography } from '@/shared'

import s from './Dialog.module.scss'

type DialogProps = {
  title: string
  trigger: ReactNode
} & ComponentPropsWithRef<'div'>

export const Dialog = ({ children, title, trigger, ...rest }: DialogProps) => {
  const [isShown, setShown] = useState(true)

  function show() {
    setShown(true)
  }

  function close(event: MouseEvent) {
    event.stopPropagation()
    setShown(false)
  }

  /**  для отправки cb-fnc закрытия окна в форму, которая сюда придет как children
       !!! children только как один тег !!! */
  const enhancedChildren = cloneElement(children as ReactElement, { setShown })

  return (
    <div onClick={show} {...rest}>
      {trigger}
      {isShown && (
        <div className={s.overlay} onClick={close}>
          <Card className={s.card} fullWidth={false} onClick={e => e.stopPropagation()}>
            <div className={s.header}>
              <Typography.H3>{title}</Typography.H3>
              <IconButton
                height={'14px'}
                iconId={'dialogClose'}
                onClick={close}
                viewBox={'0 0 14 14'}
                width={'14px'}
              />
            </div>
            {enhancedChildren}
          </Card>
        </div>
      )}
    </div>
  )
}
