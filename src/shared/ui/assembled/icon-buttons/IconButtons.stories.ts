import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { IconButtons } from './index'

const meta = {
  argTypes: {},
  component: IconButtons,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/Tables/IconButtons',
} satisfies Meta<typeof IconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeIconButtonsStory: Story = {
  args: {
    editFunction: fn(),
    id: '123',
    playFunction: fn(),
    showPlayButton: true,
    trashFunction: fn(),
  },
}

export const TwoIconButtonsStory: Story = {
  args: {
    editFunction: fn(),
    id: '123',
    showPlayButton: false,
    trashFunction: fn(),
  },
}
