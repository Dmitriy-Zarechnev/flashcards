import type { Meta, StoryObj } from '@storybook/react'

import { BrowserDecorator } from '@/services'
import { fn } from '@storybook/test'

import { IconButtons } from './index'

const meta = {
  argTypes: {},
  component: IconButtons,
  decorators: [BrowserDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/IconButtons',
} satisfies Meta<typeof IconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeIconButtonsStory: Story = {
  args: {
    cardName: 'Name',
    deleteBtnType: 'Card',
    deleteCb: fn(),
    id: '123',
    showEditButtons: true,
    showPlayButton: true,
  },
}

export const TwoIconButtonsStory: Story = {
  args: {
    cardName: 'Name',
    deleteBtnType: 'Card',
    deleteCb: fn(),
    id: '678',
    showEditButtons: true,
    showPlayButton: false,
  },
}

export const OneIconButtonsStory: Story = {
  args: {
    cardName: 'Name',
    deleteBtnType: 'Card',
    deleteCb: fn(),
    id: '456',
    showEditButtons: false,
    showPlayButton: true,
  },
}
