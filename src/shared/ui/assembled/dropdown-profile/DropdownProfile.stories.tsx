import type { Meta, StoryObj } from '@storybook/react'

import { BrowserDecorator } from '@/services'
import { fn } from '@storybook/test'

import { DropdownProfile } from './index'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: '',
  photoDescription: 'Photo of Ivan',
}

const meta = {
  component: DropdownProfile,
  decorators: [BrowserDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DropdownProfile',
} satisfies Meta<typeof DropdownProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: profile.email,
    logout: fn(),
    name: profile.name,
    photo: profile.photo,
    photoDescription: profile.photoDescription,
  },
}
