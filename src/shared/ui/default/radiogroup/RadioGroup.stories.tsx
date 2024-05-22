import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './index'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: '🟢UI/Default/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {}

export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
  },
}
