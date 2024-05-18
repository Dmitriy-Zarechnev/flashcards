import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/shared/components/typography'

import { Checkbox } from './index'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Define a wrapper component to handle state
const CheckboxWrapper = () => {
  const [checked, setChecked] = useState(false)

  function foo() {
    setChecked(!checked)
  }

  return (
    <Checkbox checked={checked} id={'checkbox'} onChange={foo}>
      <Typography.Body2>Checkbox-label</Typography.Body2>
    </Checkbox>
  )
}

export const Default = {
  render: () => <CheckboxWrapper />,
}

export const WithoutLabel: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    children: <Typography.Body2>Checkbox-label</Typography.Body2>,
    disabled: true,
    id: 'checkbox',
    onChange: () => {},
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    children: <Typography.Body2>Checkbox-label</Typography.Body2>,
    disabled: true,
    id: 'checkbox',
    onChange: () => {},
  },
}
