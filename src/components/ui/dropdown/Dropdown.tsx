import { ReactElement } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './Dropdown.module.scss'

//========================================================================================
/*

       sChild - для стандартных элементов Radix - не будет обертки, а будет отрисовываться только
                дочерний элемент
   sideOffset - расстояние между кнопкой и меню ( м/у trigger и content )
        align - с какой стороны от кнопки будет появляться меню

*/
//========================================================================================

/*
     - trigger - компонент для отображения кнопки открытия меню
*/
type DropdownProps = {
  trigger: ReactElement
  triggerClassName?: string
}

//========================================================================================

export const Dropdown = (props: DropdownProps) => {
  const { trigger, triggerClassName } = props

  return (
    <D.Root>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerClassName)}>{trigger}</button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'end'} className={s.content} sideOffset={5}>
          <D.Item>1</D.Item>
          <D.Item>2</D.Item>

          <D.Arrow className={s.arrow} height={8} width={16} />
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
