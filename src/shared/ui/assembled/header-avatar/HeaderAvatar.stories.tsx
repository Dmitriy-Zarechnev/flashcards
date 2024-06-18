import type { Meta, StoryObj } from '@storybook/react'

import { HeaderAvatar } from './'
import profileImage from './Dropdown.webp'

const meta = {
  argTypes: {},
  component: HeaderAvatar,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/HeaderAvatar',
} satisfies Meta<typeof HeaderAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultHeaderAvatar: Story = {
  args: {
    name: 'Hello',
    photo: profileImage,
    photoDescription: 'Phototo',
  },
}

export const HeaderAvatarWithoutPhoto: Story = {
  args: {
    name: 'Hello',
    photo: '',
    photoDescription: 'Phototo',
  },
}
