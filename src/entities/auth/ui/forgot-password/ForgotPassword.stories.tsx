import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { BrowserDecorator } from '@/services/decorators/BrowserDecorator'

import { ForgotPassword } from './'

const meta = {
  argTypes: {},
  component: ForgotPassword,
  decorators: [BrowserDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/ForgotPassword',
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
