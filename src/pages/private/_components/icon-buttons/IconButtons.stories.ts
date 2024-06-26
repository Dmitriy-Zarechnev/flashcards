import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'
import { fn } from '@storybook/test'

import { IconButtons } from './IconButtons'

const meta = {
  argTypes: {},
  component: IconButtons,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟣Pages/private/components/IconButtons',
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
