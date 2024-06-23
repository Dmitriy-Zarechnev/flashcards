import type { Meta, StoryObj } from '@storybook/react'

import { DropdownProfile } from './index'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: '',
  photoDescription: 'Photo of Ivan',
}

const meta = {
  component: DropdownProfile,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DropdownProfile',
} satisfies Meta<typeof DropdownProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: profile.email,
    name: profile.name,
    photo: profile.photo,
    photoDescription: profile.photoDescription,
  },
}
