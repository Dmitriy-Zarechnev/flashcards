import { ComponentPropsWithoutRef, useId } from 'react'

import { Typography } from '@/shared'
import * as T from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './Tabs.module.scss'

type TabType = {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}

export type TabsProps = {
  /** The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs. */
  defaultValue?: string
  notFullWidth?: boolean
  onClick?: () => void
  /** An array of objects with the value and title of the tab. {value: string, title: string} */
  tabs: TabType[]
  /** The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
} & ComponentPropsWithoutRef<typeof T.Root>

const Root = ({
  children,
  defaultValue,
  notFullWidth,
  onClick,
  onValueChange,
  tabs,
  value,
  ...rest
}: TabsProps) => {
  /** to apply styles to tabs borders */
  const tabId = useId()

  return (
    <T.Root
      {...rest}
      className={s.root}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <T.List aria-label={'brief description'} className={s.list}>
        {tabs.map((tab, i) => (
          <T.Trigger
            className={clsx(
              s.trigger,
              notFullWidth && s.triggerNotFullWidth,
              i === 0 && s.triggerBorderFirst,
              i === tabs.length - 1 && s.triggerBorderLast
            )}
            disabled={tab.disabled}
            key={`${tabId} ${tab.value}`}
            onClick={onClick}
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

const Content = ({ children, value, ...rest }: ContentProps) => {
  return (
    <T.Content className={s.content} value={value} {...rest}>
      {children}
    </T.Content>
  )
}

//========================================================================================

export const Tabs = {
  Content,
  Root,
}
