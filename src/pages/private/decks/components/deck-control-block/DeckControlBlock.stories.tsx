import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { DeckControlBlock } from './DeckControlBlock'

const meta = {
  argTypes: {},
  component: DeckControlBlock,
  tags: ['autodocs'],
  title: '🟣Pages/private/decks/DeckControlBlock',
} satisfies Meta<typeof DeckControlBlock>

export default meta
type Story = StoryObj<typeof meta>

const tabsData = [
  { title: 'Tab', value: 'tab1' },
  { title: 'Tab', value: 'tab2' },
  { disabled: true, title: 'Tab', value: 'tab3' },
]

export const DefaultDeckControlBlock: Story = {
  args: {
    clearFilterOnClick: fn(),
    minMaxCardsData: { max: 30, min: 0 },
    searchInputOnChange: fn(),
    searchInputReset: fn(),
    searchInputValue: '',
    sliderValueChange: fn(),
    sliderValueCommit: fn(),
    sliderValues: [0, 15],
    tabValue: 'all',
    tabValueChange: fn(),
    tabsData: tabsData,
  },
}
