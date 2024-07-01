import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: '🟢UI/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
//========================================================================================
export const DefaultInput: Story = {
  args: {
    label: 'Input',
  },
}
export const DisabledInput: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
}
export const ErrorInput: Story = {
  args: {
    error: 'error',
    label: 'Input',
  },
}
