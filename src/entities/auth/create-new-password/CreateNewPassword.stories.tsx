import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { CreateNewPassword } from './CreateNewPassword'

const meta = {
  argTypes: {},
  component: CreateNewPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Entities/auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof CreateNewPassword>

const Wrapper = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return <CreateNewPassword onSubmit={onSubmit} />
}

export const CreateNewPasswordStory: Story = {
  render: () => <Wrapper />,
}
