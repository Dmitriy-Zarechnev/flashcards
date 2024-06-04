import type { Meta, StoryObj } from '@storybook/react'

import defImg from './../../../assets/deck-default-cover.webp'
import { ImgBlock } from './index'

const meta = {
  argTypes: {},
  component: ImgBlock,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ImgBlock',
} satisfies Meta<typeof ImgBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ImgBlockStory: Story = {
  args: {
    title: 'Name',
    url: defImg,
  },
}
