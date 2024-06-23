import type { Meta, StoryObj } from '@storybook/react'

import { ProviderBrowserDecorator } from '@/services'

import { PageHeader } from './'

const meta = {
  argTypes: {},
  component: PageHeader,
  decorators: [ProviderBrowserDecorator],
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
