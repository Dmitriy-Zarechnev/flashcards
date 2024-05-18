import type { Meta, StoryObj } from '@storybook/react'

import { ThreeIconButtons } from './'

const meta = {
  argTypes: {},
  component: ThreeIconButtons,
  tags: ['autodocs'],
  title: 'Entities/Tables/ThreeIconButtons',
} satisfies Meta<typeof ThreeIconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeIconButtonsStory: Story = {
  args: {
    editFunction: () => {},
    id: '123',
    playFunction: () => {},
    trashFunction: () => {},
  },
}
