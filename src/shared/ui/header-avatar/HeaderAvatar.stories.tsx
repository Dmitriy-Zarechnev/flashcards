import type { Meta, StoryObj } from '@storybook/react'

import profileImage from './Dropdown.webp'
import { HeaderAvatar } from './HeaderAvatar'

const meta = {
  argTypes: {},
  component: HeaderAvatar,
  tags: ['autodocs'],
  title: '🟢UI/HeaderAvatar',
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
    photo: undefined,
    photoDescription: 'Phototo',
  },
}
