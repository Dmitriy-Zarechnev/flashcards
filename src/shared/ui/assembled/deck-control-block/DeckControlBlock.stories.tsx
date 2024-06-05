import type { Meta, StoryObj } from '@storybook/react'

import { DeckControlBlock } from './'

const meta = {
  argTypes: {},
  component: DeckControlBlock,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DeckControlBlock',
} satisfies Meta<typeof DeckControlBlock>

export default meta
type Story = StoryObj<typeof DeckControlBlock>

const MyWrapper = () => {
  return <DeckControlBlock />
}

export const DefaultDeckControlBlock: Story = {
  render: () => <MyWrapper />,
}
