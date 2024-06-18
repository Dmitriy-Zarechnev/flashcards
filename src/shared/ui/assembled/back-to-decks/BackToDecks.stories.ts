import type { Meta, StoryObj } from '@storybook/react'

import { RouterDecorator } from '@/shared/utils/RouterDecorator'

import { BackToDecks } from './'

const meta = {
  argTypes: {},
  component: BackToDecks,
  decorators: [RouterDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/BackToDecks',
} satisfies Meta<typeof BackToDecks>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBackToDecks: Story = {
  args: {
    iconId: 'arrowBackOutline',
    title: 'Back to Decks List',
  },
}
