import type { Meta, StoryObj } from '@storybook/react'

import { FC, useState } from 'react'

import { fn } from '@storybook/test'

import { Select } from './Select'

const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5 },
]

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: '🟢UI/Select',
}

export default meta

type Story = StoryObj<typeof Select>

const Wrapper: FC<{ isDisabled: boolean }> = ({ isDisabled }) => {
  const [currentValue, setCurrentValue] = useState<number | string>(1)

  function foo(value: number | string) {
    setCurrentValue(value)
  }

  return (
    <Select
      currentValue={currentValue}
      disabled={isDisabled}
      onValueChange={foo}
      options={options}
      selectTitle={'SelectTitle'}
    />
  )
}

export const Default: Story = {
  render: () => <Wrapper isDisabled={false} />,
}

export const Disabled: Story = {
  render: () => <Wrapper isDisabled />,
}

export const WithoutActiveBackground: Story = {
  args: {
    currentValue: 2,
    isActiveBackgroundBlocked: true,
    onChange: fn,
    options,
    selectTitle: 'SelectTitle',
  },
}
