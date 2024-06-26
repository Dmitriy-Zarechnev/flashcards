import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const options = [
  { id: '1', label: 'RadioGroup 1', value: 'item 1' },
  { id: '2', label: 'RadioGroup 2', value: 'item 2' },
  { id: '3', label: 'RadioGroup 3', value: 'item 3' },
]

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: '🟢UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {
  args: {
    options,
  },
}

export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    options,
  },
}
