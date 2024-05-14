import { ReactNode } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './Dropdown.module.scss'

type DropdownProps = {
  children?: ReactNode
  trigger: ReactNode
  triggerClassName?: string
}

const Root = ({ children, trigger, triggerClassName }: DropdownProps) => {
  return (
    <D.Root>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerClassName)}>{trigger}</button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'end'} className={s.content} sideOffset={5}>
          {children}
          <D.Arrow asChild>
            <div className={s.arrow} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}

type ItemProps = {
  children: ReactNode
  className?: string
}

const Item = ({ children, className }: ItemProps) => (
  <D.Item className={clsx(s.item, className)}>{children}</D.Item>
)

const Separator = () => <D.Separator className={s.separator} />

export const Dropdown = {
  Item,
  Root,
  Separator,
}
