import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './IconButton'

const meta = {
  argTypes: {},
  component: IconButton,
  tags: ['autodocs'],
  title: '🟢UI/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const IconButtonsStory: Story = {
  args: {
    height: '14px',
    iconId: 'eyeOutline',
    width: '14px',
  },
}
