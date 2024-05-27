import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/entities/auth/login-form/LoginForm'

const meta = {
  argTypes: {},
  component: LoginForm,
  tags: ['autodocs'],
  title: 'LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormStory: Story = {
  args: {},
}
