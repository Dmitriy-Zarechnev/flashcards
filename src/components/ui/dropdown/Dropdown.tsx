import { ReactNode } from 'react'

import { Icon, IconProps } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './Dropdown.module.scss'

//========================================================================================
/*
      asChild - для стандартных элементов Radix - не будет обертки, а будет отрисовываться только
                дочерний элемент
   sideOffset - расстояние между кнопкой и меню ( м/у trigger и content )
        align - с какой стороны от кнопки будет появляться меню
*/
//========================================================================================

export type ItemType = {
  id: string
  svgCfg: IconProps
  title: string
}

export type DropdownProfile = {
  email: string
  person: string
}

/*
         - dropdownProfile - объект для отображения в профиля пользователя
                   - Items - массив элементов для отображения в меню
        - triggerClassName - className для кнопки открытия меню
                 - trigger - компонент для отображения кнопки открытия меню
*/
type DropdownProps = {
  children?: ReactNode
  dropdownProfile?: DropdownProfile
  items: ItemType[]
  trigger: ReactNode
  triggerClassName?: string
}
//========================================================================================

const Root = ({ children, dropdownProfile, trigger, triggerClassName }: DropdownProps) => {
  return (
    <D.Root>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerClassName, dropdownProfile && s.triggerProfile)}>
          {trigger}
        </button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'end'} className={s.content} sideOffset={5}>
          {children}
          <D.Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}

type ItemProps = {
  children: ReactNode
  title: string
}

const Item = ({ children, title }: ItemProps) => {
  return (
    <D.Item className={s.item}>
      {children}
      <Typography.Caption className={s.itemTitle}>{title}</Typography.Caption>
    </D.Item>
  )
}

const Separator = () => <D.Separator className={s.separator} />

export const Dropdown = {
  Item,
  Root,
  Separator,
}
