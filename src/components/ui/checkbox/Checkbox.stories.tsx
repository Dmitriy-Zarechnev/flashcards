import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checked',
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
    <Checkbox checked={checked} onChange={foo}>
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
    onChange: () => {},
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    children: <Typography.Body2>Checkbox-label</Typography.Body2>,
    disabled: true,
    onChange: () => {},
  },
}
