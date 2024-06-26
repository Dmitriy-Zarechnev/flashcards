import type { Meta, StoryObj } from '@storybook/react'

import { SignUpFormValues } from '@/entities'
import { StorybookDecorator } from '@/services/StorybookDecorator'

import { SignUp } from './SignUp'

const meta = {
  argTypes: {},
  component: SignUp,
  decorators: [StorybookDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Entities/auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof SignUp>

export const SingUpStory: Story = {
  args: {
    onSubmit: (data: SignUpFormValues) => console.log(data),
  },
}
