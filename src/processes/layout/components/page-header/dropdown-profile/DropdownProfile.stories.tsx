import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'
import { fn } from '@storybook/test'

import { DropdownProfile } from './DropdownProfile'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: '',
  photoDescription: 'Photo of Ivan',
}

const meta = {
  component: DropdownProfile,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟤Processes/layout/components/PageHeader/DropdownProfile',
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
