import type { Meta, StoryObj } from '@storybook/react'

import { cardDefaultCover } from '@/shared'

import { ImgBlock } from './ImgBlock'

const meta = {
  argTypes: {},
  component: ImgBlock,
  tags: ['autodocs'],
  title: '🟣Pages/private/components/ImgBlock',
} satisfies Meta<typeof ImgBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ImgBlockStory: Story = {
  args: {
    title: 'Name',
    url: cardDefaultCover,
  },
}
