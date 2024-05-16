import type { Meta, StoryObj } from '@storybook/react'

import { ImgBlock } from '@/components/ui/imgBlock/ImgBlock'

import defImg from '../../../assets/defaultPicture.jpg'

const meta = {
  argTypes: {},
  component: ImgBlock,
  tags: ['autodocs'],
  title: 'Components/ImgBlock',
} satisfies Meta<typeof ImgBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ImgBlockStory: Story = {
  args: {
    title: 'Name',
    url: defImg,
  },
}
