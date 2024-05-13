import { Fragment, ReactNode } from 'react'

import { Icon, IconProps } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
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

export type Item = {
  id: string
  svgCfg: IconProps
  title: string
}

/*
        - triggerClassName - className для кнопки открытия меню
        - triggerComponent - компонент для отображения кнопки открытия меню
              - ItemsArray - массив элементов для отображения в меню
*/
type DropdownProps = {
  itemsArray: Item[]
  triggerClassName?: string
  triggerComponent: ReactNode
}

//========================================================================================

export const Dropdown = (props: DropdownProps) => {
  const { itemsArray, triggerClassName, triggerComponent } = props

  return (
    <D.Root>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerClassName)}>{triggerComponent}</button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'center'} className={s.content} sideOffset={5}>
          {itemsArray.map((item, index) => (
            <Fragment key={item.id}>
              <D.Item className={s.item} key={item.id}>
                <Icon iconId={item.svgCfg.iconId} />
                <Typography.Caption className={s.itemTitle}>{item.title}</Typography.Caption>
              </D.Item>
              {index !== itemsArray.length - 1 && <D.Separator className={s.separator} />}
            </Fragment>
          ))}

          {/*<D.Arrow className={s.arrow} height={8} width={16} />*/}
          <D.Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
