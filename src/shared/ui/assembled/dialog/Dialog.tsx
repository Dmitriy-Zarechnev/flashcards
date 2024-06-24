import {
  ComponentPropsWithRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useState,
} from 'react'

import { Card, IconButton, Typography } from '@/shared'

import s from './Dialog.module.scss'

type DialogProps = {
  title: string
  trigger: ReactNode
} & ComponentPropsWithRef<'div'>

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, id, title, trigger, ...rest }, ref) => {
    const [isShown, setShown] = useState(false)
    // для избежания закрытия окна, если пользователь кликнул внутри модалки, а отжал кнопку вне модалки
    // для реализации функции => handleMouseDown | handleMouseUp
    const [isMouseDownInside, setMouseDownInside] = useState(false)

    function show() {
      setShown(true)
    }

    function handleMouseDown(event: MouseEvent) {
      // если кликнули по клику внутри модалки, т.е. у тега, которого есть `.${s.card}`
      const card = (event.target as HTMLElement).closest(`.${s.card}`)

      // если кликнули по модалке
      if (card) {
        setMouseDownInside(true)
      } else {
        setMouseDownInside(false)
      }
    }

    function handleMouseUp(event: MouseEvent) {
      // если кликнули по клику внутри модалки, т.е. у тега, которого есть `.${s.card}`
      const card = (event.target as HTMLElement).closest(`.${s.card}`)

      // если данный клик не по модалке и НАЧАЛЬНОЕ НАЖАТИЕ было не внутри модалки
      if (!card && !isMouseDownInside) {
        // то закрываем окно
        setShown(false)
      }

      // клик начался внутри и закончился внутри => вернуть state в начальное состояние
      setMouseDownInside(false)
    }

    function closeHandler(event: MouseEvent) {
      event.stopPropagation()
      setShown(false)
    }

    /**  для отправки cb-fnc закрытия окна в форму, которая сюда придет как children
   !!! children только как один тег !!! */
    const enhancedChildren = cloneElement(children as ReactElement, {
      closeModal: () => {
        setShown(false)
      },
    })

    return (
      <div onClick={show} ref={ref} {...rest} id={id}>
        {trigger}
        {isShown && (
          <div
            className={s.overlay}
            onClick={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <Card
              className={s.card}
              fullWidth={false}
              onClick={e => e.stopPropagation()}
              style={{ padding: '0' }}
            >
              <div className={s.header}>
                <Typography.H3>{title}</Typography.H3>
                <IconButton
                  height={'14px'}
                  iconId={'dialogClose'}
                  onClick={closeHandler}
                  viewBox={'0 0 12 12'}
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
)
