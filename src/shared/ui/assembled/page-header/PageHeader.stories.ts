import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { PageHeader } from './'

const meta = {
  argTypes: {},
  component: PageHeader,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/PageHeader',
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const SingUpPageHeaderStory: Story = {
  args: {},
}

export const NotSingUpPageHeaderStory: Story = {
  args: {},
}
