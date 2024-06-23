import type { Meta, StoryObj } from '@storybook/react'

import { SignUpFormValues } from '@/entities'
import { BrowserDecorator } from '@/services'

import { SingUp } from './SingUp'

const meta = {
  argTypes: {},
  component: SingUp,
  decorators: [BrowserDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/SingUp',
} satisfies Meta<typeof SingUp>

export default meta
type Story = StoryObj<typeof SingUp>

export const SingUpStory: Story = {
  args: {
    onSubmit: (data: SignUpFormValues) => console.log(data),
  },
}
