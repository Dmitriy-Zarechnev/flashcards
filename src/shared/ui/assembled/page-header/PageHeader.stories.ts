import type { Meta, StoryObj } from '@storybook/react'

import { RouterDecorator } from '@/shared/utils/RouterDecorator'

import { PageHeader } from './'

const meta = {
  argTypes: {},
  component: PageHeader,
  decorators: [RouterDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/PageHeader',
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const SingUpPageHeaderStory: Story = {
  args: {
    isSingUp: true,
  },
}

export const NotSingUpPageHeaderStory: Story = {
  args: {
    isSingUp: false,
  },
}
