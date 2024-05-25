import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './'

const meta = {
  argTypes: {},
  component: ForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = {
  args: {},
}
