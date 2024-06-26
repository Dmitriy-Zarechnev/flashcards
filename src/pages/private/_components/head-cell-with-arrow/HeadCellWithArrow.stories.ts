import type { Meta, StoryObj } from '@storybook/react'

import { HeadCellWithArrow } from './HeadCellWithArrow'

const meta = {
  argTypes: {},
  component: HeadCellWithArrow,
  tags: ['autodocs'],
  title: '🟣Pages/private/components/HeadCellWithArrow',
} satisfies Meta<typeof HeadCellWithArrow>

export default meta
type Story = StoryObj<typeof meta>

export const HeadCellWithDownArrowDirectionStory: Story = {
  args: {
    arrowDirection: true,
    title: 'Name 1',
  },
}

export const HeadCellWithUpArrowDirectionStory: Story = {
  args: {
    arrowDirection: false,
    title: 'Name 1',
  },
}
