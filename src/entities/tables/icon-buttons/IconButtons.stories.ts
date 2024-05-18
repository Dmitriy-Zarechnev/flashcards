import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { IconButtons } from './'

const meta = {
  argTypes: {},
  component: IconButtons,
  tags: ['autodocs'],
  title: 'Entities/Tables/IconButtons',
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
