import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { TwoIconButtons } from './'

const meta = {
  argTypes: {},
  component: TwoIconButtons,
  tags: ['autodocs'],
  title: 'Entities/Tables/TwoIconButtons',
} satisfies Meta<typeof TwoIconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const TwoIconButtonsStory: Story = {
  args: {
    editFunction: fn(),
    id: '456',
    trashFunction: fn(),
  },
}
