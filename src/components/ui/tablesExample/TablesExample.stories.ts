import type { Meta, StoryObj } from '@storybook/react'

import { TablesExample } from './'

const meta = {
  argTypes: {},
  component: TablesExample,
  tags: ['autodocs'],
  title: 'Components/TablesExample',
} satisfies Meta<typeof TablesExample>

export default meta
type Story = StoryObj<typeof meta>

export const TablesExampleStory: Story = {
  args: {},
}
