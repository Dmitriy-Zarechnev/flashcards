import { Fragment, ReactNode } from 'react'

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

export type Item = {
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
              - ItemsArray - массив элементов для отображения в меню
        - triggerClassName - className для кнопки открытия меню
        - triggerComponent - компонент для отображения кнопки открытия меню
*/
type DropdownProps = {
  dropdownProfile?: DropdownProfile
  itemsArray: Item[]
  triggerClassName?: string
  triggerComponent: ReactNode
}
//========================================================================================

export const Dropdown = (props: DropdownProps) => {
  const { dropdownProfile, itemsArray, triggerClassName, triggerComponent } = props

  return (
    <D.Root>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerClassName, dropdownProfile && s.triggerProfile)}>
          {triggerComponent}
        </button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'end'} className={s.content} sideOffset={5}>
          {dropdownProfile && (
            <>
              <div className={s.profile}>
                <div
                  className={clsx(s.trigger, triggerClassName, dropdownProfile && s.triggerProfile)}
                >
                  {triggerComponent}
                </div>
                <div>
                  <Typography.Subtitle2>{dropdownProfile.person}</Typography.Subtitle2>
                  <Typography.Caption>{dropdownProfile.email}</Typography.Caption>
                </div>
              </div>
              <D.Separator className={s.separator} />
            </>
          )}

          {itemsArray.map((item, index) => (
            <Fragment key={item.id}>
              <D.Item className={s.item}>
                <Icon iconId={item.svgCfg.iconId} />
                <Typography.Caption className={s.itemTitle}>{item.title}</Typography.Caption>
              </D.Item>
              {index !== itemsArray.length - 1 && <D.Separator className={s.separator} />}
            </Fragment>
          ))}

          <D.Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
