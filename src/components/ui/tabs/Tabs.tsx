import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as T from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './Tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}

export type TabsProps = {
  /** The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs. */
  defaultValue?: string
  notFullWidth?: boolean
  /** An array of objects with the value and title of the tab. {value: string, title: string} */
  tabs: TabType[]
  /** The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
} & ComponentPropsWithoutRef<typeof T.Root>

const Root = ({
  children,
  defaultValue,
  notFullWidth,
  onValueChange,
  tabs,
  value,
  ...rest
}: TabsProps) => {
  return (
    <T.Root
      className={s.root}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
      {...rest}
    >
      <T.List aria-label={'brief description'} className={s.list}>
        {tabs.map(tab => (
          <T.Trigger
            className={clsx(s.trigger, notFullWidth && s.triggerNotFullWidth)}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            <Typography.Body1>{tab.title}</Typography.Body1>
          </T.Trigger>
        ))}
      </T.List>
      {children}
    </T.Root>
  )
}

type ContentProps = {
  /** A unique value that associates the trigger with a content. */
  value: string
} & ComponentPropsWithoutRef<typeof T.Content>

export const Content = ({ children, value, ...rest }: ContentProps) => {
  return (
    <T.Content className={s.content} value={value} {...rest}>
      {children}
    </T.Content>
  )
}

export const Tabs = {
  Content,
  Root,
}
