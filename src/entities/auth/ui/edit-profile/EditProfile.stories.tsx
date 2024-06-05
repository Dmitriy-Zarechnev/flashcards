import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from './'

const meta = {
  argTypes: {},
  component: EditProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof EditProfile>

const dataFromServer = {
  email: 'Dmitry.Super@proger.io',
  name: 'Dmitry🐱‍💻',
}

export const SingUpStory: Story = {
  args: {
    changeProfileImg: (file: any) => console.log('data is submitted', file),
    email: dataFromServer.email,
    logout: () => console.log('logout'),
    name: dataFromServer.name,
  },
}
