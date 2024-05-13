import { ReactNode } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

//========================================================================================
/*

 sChild - для стандартных элементов Radix - не будет обертки, а будет отрисовываться только
          дочерний элемент



*/
//========================================================================================

/*
showDirection - с какой стороны от кнопки будет появляться меню
trigger - компонент для отображения кнопки открытия меню
*/
type DropdownProps = {
  showDirection?: 'center' | 'end' | 'start'
  trigger: ReactNode
}

//========================================================================================

export const Dropdown = ({ showDirection = 'center', trigger }: DropdownProps) => {
  return (
    <D.Root>
      <D.Trigger asChild className={s.triggerBtn}>
        {trigger}
      </D.Trigger>
      <D.Portal>
        <D.Content align={showDirection} className={s.content}>
          <D.Item>1</D.Item>
          <D.Item>2</D.Item>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
