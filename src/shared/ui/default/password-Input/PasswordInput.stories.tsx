import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './'

const meta = {
  argTypes: {},
  component: PasswordInput,
  tags: ['autodocs'],
  title: '🟢UI/Default/PasswordInput',
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPasswordInput: Story = {
  args: {
    label: 'Password Input',
  },
}
