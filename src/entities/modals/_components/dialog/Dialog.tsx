import {
  ComponentPropsWithRef,
  MouseEvent,
  ReactElement,
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
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
    /* для избежания закрытия окна, если пользователь кликнул внутри модалки, а отжал кнопку вне модалки
       функции => handleMouseDown | handleMouseUp */
    const [isMouseDownInside, setMouseDownInside] = useState(false)

    /* 🔹стейт для блокировки модалки при закрытия окна выбора картинки
         1. этим стейтом блокируем клики
         2. передаем функцию менять стейт в компоненту картинок, где есть кнопка
         3. в компоненте картинок блокируем клики по модалке, и разрешаем через 0.5с => избегаем мискликов
            при выборе картинки */
    const [isBlocked, setBlocked] = useState(false)

    /* 🍏 Для замыкания фокуса на модальном окне */
    const dialogRef = useRef<HTMLDivElement>(null)

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
      /* 🔹 блокируем клик по модалке - достаточно заблокировать только отжатие клика */
      if (isBlocked) {
        return
      }

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
      /* 🔹 Передаем функцию блокировки в дочерний компонент */
      setBlocked: setBlocked,
    })

    /* 🍏 Обработчик для замыкания фокуса на модальном окне */
    function handleKeyDown(event: ReactKeyboardEvent) {
      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements?.[0]
        const lastElement = focusableElements?.[focusableElements.length - 1]

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus()
            event.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus()
            event.preventDefault()
          }
        }
      }
    }

    /* 🍏 Для замыкания фокуса на модальном окне */
    useEffect(() => {
      if (isShown) {
        dialogRef.current?.focus()
      }
    }, [isShown])

    return (
      <div onClick={show} ref={ref} {...rest} id={id}>
        {trigger}
        {isShown && (
          <div
            className={s.overlay}
            onClick={handleMouseUp}
            onKeyDown={handleKeyDown} /* 🍏 Для замыкания фокуса на модальном окне */
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            ref={dialogRef} /* 🍏 Для замыкания фокуса на модальном окне */
            tabIndex={-1} /* 🍏 Для замыкания фокуса на модальном окне */
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
