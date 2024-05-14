import { ReactNode } from 'react'

import { IconProps } from '@/components/ui/icon'
import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './Dropdown.module.scss'

export type ItemType = {
  id: string
  svgCfg: IconProps
  title: string
}

export type DropdownProfile = {
  email: string
  person: string
}

type DropdownProps = {
  children?: ReactNode
  dropdownProfile?: DropdownProfile
  items: ItemType[]
  trigger: ReactNode
  triggerClassName?: string
}

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
}

const Item = ({ children }: ItemProps) => <D.Item className={s.item}>{children}</D.Item>

const Separator = () => <D.Separator className={s.separator} />

export const Dropdown = {
  Item,
  Root,
  Separator,
}
