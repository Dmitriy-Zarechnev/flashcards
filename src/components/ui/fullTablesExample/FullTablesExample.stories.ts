import type { Meta, StoryObj } from '@storybook/react'

import { FullTablesExample } from './'

const meta = {
  argTypes: {},
  component: FullTablesExample,
  tags: ['autodocs'],
  title: 'Components/FullTablesExample',
} satisfies Meta<typeof FullTablesExample>

export default meta
type Story = StoryObj<typeof meta>

export const FullTablesExampleStory: Story = {
  args: {},
}
