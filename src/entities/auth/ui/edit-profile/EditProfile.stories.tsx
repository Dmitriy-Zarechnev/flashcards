import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from './'

const meta = {
  argTypes: {},
  component: EditProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof EditProfile>

export const SingUpStory: Story = {
  args: {},
}
