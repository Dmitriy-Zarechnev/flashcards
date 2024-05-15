import type { Meta, StoryObj } from '@storybook/react'

import { DropdownProfile } from './'
import profileImage from './Dropdown.webp'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: profileImage,
  photoDescription: 'Photo of Ivan',
}

const meta = {
  component: DropdownProfile,
  tags: ['autodocs'],
  title: 'Components/DropdownProfile',
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
