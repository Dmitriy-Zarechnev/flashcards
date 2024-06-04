import type { Meta, StoryObj } from '@storybook/react'

import { HeadCellWithArrow } from './index'

const meta = {
  argTypes: {},
  component: HeadCellWithArrow,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/HeadCellWithArrow',
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
