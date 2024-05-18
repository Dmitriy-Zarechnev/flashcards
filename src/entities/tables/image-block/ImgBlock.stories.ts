import type { Meta, StoryObj } from '@storybook/react'

import { ImgBlock } from './'
import defImg from './../assets/defaultPicture.jpg'

const meta = {
  argTypes: {},
  component: ImgBlock,
  tags: ['autodocs'],
  title: 'Entities/Tables/ImgBlock',
} satisfies Meta<typeof ImgBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ImgBlockStory: Story = {
  args: {
    title: 'Name',
    url: defImg,
  },
}
