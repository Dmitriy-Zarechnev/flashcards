import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  argTypes: {},
  component: ForgotPassword,
  decorators: [StorybookDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Entities/auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof ForgotPassword>

const Wrapper = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return <ForgotPassword onSubmit={onSubmit} />
}

export const ForgotPasswordStory: Story = {
  render: () => <Wrapper />,
}
