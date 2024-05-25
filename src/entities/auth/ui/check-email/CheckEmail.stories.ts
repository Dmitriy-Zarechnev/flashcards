import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './'

const meta = {
  argTypes: {},
  component: CheckEmail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailStory: Story = {
  args: {},
}
