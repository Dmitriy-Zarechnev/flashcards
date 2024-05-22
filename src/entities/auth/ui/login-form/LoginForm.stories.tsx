import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  argTypes: {},
  component: LoginForm,
  tags: ['autodocs'],
  title: '🟡Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormStory: Story = {
  args: {},
}
