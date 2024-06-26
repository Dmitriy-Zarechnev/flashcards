import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'
import { fn } from '@storybook/test'

import { BackToDecks } from './BackToDecks'

const meta = {
  argTypes: {},
  component: BackToDecks,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟣Pages/private/components/BackToDecks',
} satisfies Meta<typeof BackToDecks>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBackToDecks: Story = {
  args: {
    navigationCb: fn(),
    title: 'Back to Decks List',
  },
}
