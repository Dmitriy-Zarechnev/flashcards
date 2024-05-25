import type { Meta, StoryObj } from '@storybook/react'

import { SingUp } from './SingUp'

const meta = {
  argTypes: {},
  component: SingUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/SingUp',
} satisfies Meta<typeof SingUp>

export default meta
type Story = StoryObj<typeof meta>

export const SingUpStory: Story = {
  args: {},
}
