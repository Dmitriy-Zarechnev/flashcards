import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { IconButtons } from './index'

const meta = {
  argTypes: {},
  component: IconButtons,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/IconButtons',
} satisfies Meta<typeof IconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeIconButtonsStory: Story = {
  args: {
    editFunction: fn(),
    id: '123',
    playFunction: fn(),
    showEditButtons: true,
    showPlayButton: true,
    trashFunction: fn(),
  },
}

export const TwoIconButtonsStory: Story = {
  args: {
    editFunction: fn(),
    id: '678',
    showEditButtons: true,
    showPlayButton: false,
    trashFunction: fn(),
  },
}

export const OneIconButtonsStory: Story = {
  args: {
    id: '456',
    playFunction: fn(),
    showEditButtons: false,
    showPlayButton: true,
  },
}
